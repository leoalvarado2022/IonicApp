import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {rutValidator} from '../../validators/rut.validator';
import {LoaderService} from '../../services/loader/loader.service';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {ToastService} from '../../services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private loaderService: LoaderService,
              private authService: AuthService,
              private router: Router,
              private toastService: ToastService) {

    this.loginForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        rutValidator
      ]],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  /**
   * onSubmit
   */
  public onSubmit = async () => {

    try {

      const data = Object.assign({}, this.loginForm.value);

      data.username = data.username.toLowerCase();

      const login = await this.login(data);

      if (login && login.code === 1) {

        this.addPin(login);

      } else {

        this.makeLogin();

      }

    } catch (e) {

      this.loaderService.hideLoader();

    }

  };

  /**
   *
   * @param login add PIN
   */
  public addPin = (login: any)  => {

    this.toastService.warningToast(login.message);

    this.loginForm.reset();

    this.authService.setToken(login.token);
    this.router.navigate(['pin'])

  };

  /**
   * @description hacer login si no tiene pin
   */
  public makeLogin = () => {



    this.loginForm.reset();
    this.router.navigate(['home-page'])

  }


  /**
   * filterKeys
   * @param event
   */
  public filterKeys = (event: any) => {
    const filter = '0123456789.-kK';

    if (event.key) {
      return filter.includes(event.key);
    }

    return false;
  };

  /**
   * loginEndpoint
   * @param data LoginEndpoint
   */
  private login = (data: any): Promise<any> => {

    this.loaderService.showLoader('Iniciando sesion...');

    return new Promise((resolve) => {

      this.authService.login(data).subscribe((success: any) => {

        this.loaderService.hideLoader();
        resolve(success);

      }, error => {

        this.loaderService.hideLoader();
        const name = error.error.name;

        if (name === 'ConnectionsNotFound') {

          const token = error.error.data.token;
          resolve({code: 1, token, user: data, message: error.error.message});

        } else {

          const msg = this.authService.errorsHandler(error);
          resolve(null);

        }

      });
    });
  };
}
