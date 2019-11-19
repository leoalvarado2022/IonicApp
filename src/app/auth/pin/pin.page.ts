import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoaderService} from '../../services/loader/loader.service';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {ToastService} from '../../services/toast/toast.service';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.page.html',
  styleUrls: ['./pin.page.scss'],
})
export class PinPage implements OnInit {

  public pinForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private loaderService: LoaderService,
              private authService: AuthService,
              private userService: UserService,
              private router: Router,
              private toastService: ToastService) {

    this.pinForm = this.formBuilder.group({
      pin: ['', [
        Validators.required,
      ]]
    });

  }

  ngOnInit() {
  }

  /**
   * onSubmit pin
   */
  public onSubmit = async () => {

    try {
      const data = Object.assign({}, this.pinForm.value);

      if (data && data.pin) {
        const connectionPin = await this.createUserConnection(data);

        if (connectionPin.data && connectionPin.status === 201) {
          this.pinForm.reset();
          await this.userService.removeUserRemember();
          await this.userService.removeUserData();
          this.authService.removeToken();
          this.authService.removeConnection();
          this.router.navigate(['auth/login'])
        }
      }

    } catch (e) {
      this.loaderService.hideLoader();
    }
  };


  /**
   * createConnectionPin
   * @param pin
   */
  private createUserConnection = (pin: any): Promise<any> => {

    this.loaderService.showLoader();

    return new Promise((resolve) => {

      this.authService.createPinConnection(pin).subscribe((success: any) => {

        this.loaderService.hideLoader();
        this.toastService.successToast('Se creo la conexion correctamente, por favor inicie sesión');
        resolve(success);

      }, error => {

        this.loaderService.hideLoader();
        const msg = this.authService.errorsHandler(error);

        this.toastService.errorToast(msg)

        resolve(null);
      });
    });
  };
  
}
