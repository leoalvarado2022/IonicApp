import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {confirmPassword} from '../../../../validators/confirm-password.validator';
import {UserService} from '../../../../shared/services/user/user.service';
import {AuthService} from '../../../../shared/services/auth/auth.service';
import {ModalController} from '@ionic/angular';
import {HttpService} from '../../../../shared/services/http/http.service';
import {StoreService} from '../../../../shared/services/store/store.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {

  public passwordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private loaderService: LoaderService,
    private toastService: ToastService,
    private modalController: ModalController,
    private httpService: HttpService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirm: ['', Validators.required],
    }, {validator: confirmPassword});
  }

  /**
   * @description actualizar usuario
   */
  onSubmit = () => {
    const user = this.storeService.getRememberData();
    const password = user.password;
    const token = this.storeService.getToken();

    const custom = {
      token,
      password,
      newPassword: this.passwordForm.get('password').value,
      newPassword_confirm: this.passwordForm.get('confirm').value,
    };

    const data = Object.assign({}, custom);

    this.update(data, user);
  };

  modalClose = () => {
    this.modalController.dismiss();
  };

  /**
   * create
   * @param data
   */
  private update = (data: any, userRemember: any): void => {
    this.loaderService.startLoader();

    this.userService.updatePassword(data).subscribe(success => {

      userRemember.password = data.newPassword;
      this.storeService.setRememberData(userRemember);
      this.toastService.successToast('Se actualizo la contraseña correctamente');
      this.modalClose();
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

}
