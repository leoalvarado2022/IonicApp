import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {AuthService} from '../../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {UserService} from '../../../../shared/services/user/user.service';
import {HttpService} from '../../../../shared/services/http/http.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.page.html',
  styleUrls: ['./pin.page.scss'],
})
export class PinPage implements OnInit {

  public pinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loaderService: LoaderService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private toastService: ToastService,
    private httpService: HttpService
  ) {

  }

  ngOnInit() {
    this.pinForm = this.formBuilder.group({
      pin: ['', [
        Validators.required,
      ]]
    });
  }

  /**
   * onSubmit pin
   */
  public onSubmit = async () => {
    this.loaderService.startLoader();
    try {
      const data = Object.assign({}, this.pinForm.value);

      if (data && data.pin) {
        const connectionPin = await this.createUserConnection(data);


        if (connectionPin.data && connectionPin.status === 201) {

          const user: any = await this.userConnection();
          if (user.user && user.status === 200) {

            const checkToken: any = await this.checkToken();
            if (checkToken.data && checkToken.status === 200) {

              this.authService.setConnection(checkToken.data[0]);

              console.log(connectionPin, 'connectionPin');
              console.log(user, 'user');
              console.log(checkToken, 'checkToken');

              const role = checkToken.data[0].rol;
              const id_conexion = connectionPin.data[0].id_conexion;

              const data = Object.assign(user.user[0], {
                names: user.user[0].name,
                password: '',
                role,
                pin: this.pinForm.value.pin,
                connectionId: id_conexion,
                app: 'FX10',
                idUsuario: connectionPin.data[0].id_usuario
              });

              const response = await this.assignUser(data);

              if (response === null || response.status !== 200) {
                this.pinForm.get('pin').setValue('');
                // this.toastService.errorToast( 'El PIN ingresado es inválido.')
              } else {
                this.pinForm.reset();
                await this.userService.removeUserRemember();
                await this.userService.removeUserData();
                this.authService.removeToken();
                this.authService.removeConnection();
                this.router.navigate(['auth/login']);
                // this.router.navigate(['/auth'])
              }
              //
            }
          }

        }
      }

      this.loaderService.stopLoader();

    } catch (e) {
      this.loaderService.stopLoader();
    }
  }


  /**
   * check token
   * @param pin
   */
  private checkToken = (): Promise<any> => {
    // this.loaderService.showLoader();
    return new Promise((resolve) => {
      this.authService.checkToken().subscribe((success: any) => {

        // this.loaderService.hideLoader();
        // this.toastService.successToast('Se creo la conexion correctamente, por favor inicie sesión');
        resolve(success);
      }, error => {
        this.httpService.errorHandler(error);
        resolve(null);
      });
    });
  }

  /**
   * check token
   * @param pin
   */
  private assignUser = (data: any): Promise<any> => {
    // this.loaderService.showLoader();
    return new Promise((resolve) => {
      this.userService.assignUser(data).subscribe((success: any) => {
        // this.loaderService.hideLoader();
        // this.toastService.successToast('Se creo la conexion correctamente, por favor inicie sesión');
        resolve(success);
      }, error => {
        this.httpService.errorHandler(error);
        resolve(null);
      });
    });
  }

  /**
   * use connection
   * @param pin
   */
  private userConnection = (): Promise<any> => {
    // this.loaderService.showLoader();
    return new Promise((resolve) => {
      this.userService.getUser().subscribe((success: any) => {
        // this.loaderService.hideLoader();
        // this.toastService.successToast('Se creo la conexion correctamente, por favor inicie sesión');
        resolve(success);
      }, error => {
        this.httpService.errorHandler(error);
        resolve(null);
      });
    });
  }

  /**
   * createConnectionPin
   * @param pin
   */
  private createUserConnection = (pin: any): Promise<any> => {
    // this.loaderService.showLoader();
    return new Promise((resolve) => {
      this.authService.createPinConnection(pin).subscribe((success: any) => {
        // this.loaderService.hideLoader();
        // this.toastService.successToast('Se creo la conexion correctamente, por favor inicie sesión');
        resolve(success);
      }, error => {
        this.httpService.errorHandler(error);
        resolve(null);
      });
    });
  }

}
