import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {confirmPassword} from '../../../../validators/confirm-password.validator';
import {UserService} from '../../../../shared/services/user/user.service';
import {AuthService} from '../../../../shared/services/auth/auth.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {

  passwordForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private authService: AuthService,
              private loaderService: LoaderService,
              private toastService: ToastService,
              private modalController: ModalController) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm = () => {
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirm: ['', Validators.required],
    }, {validator: confirmPassword});
  }

  /**
   * @description actualizar usuario
   */
  onSubmit = async () => {
    const user = await this.userService.getUserRemember();
    const password = user.password;
    const token = this.authService.getToken();

    const custom = {
      token,
      password,
      newPassword: this.passwordForm.get('password').value,
      newPassword_confirm: this.passwordForm.get('confirm').value,
    };

    const data = Object.assign({}, custom);

    await this.update(data, user);
  }

  /**
   * create
   * @param data
   */
  private async update(data: any, userRemember: any): Promise<any> {

    await this.loaderService.startLoader();

    return new Promise((resolve, reject) => {
      this.userService.updatePassword(data).subscribe(success => {

        this.modalController.dismiss();

        userRemember.password = data.newPassword;
        this.userService.setUserRemember(userRemember);
        this.toastService.successToast('Se actualizo la contraseña correctamente');
        this.loaderService.stopLoader();
        resolve(true);
      }, error => {
        const msg = this.authService.errorsHandler(error);
        this.loaderService.stopLoader();
        this.toastService.errorToast(msg);
        resolve(false);
      });
    });
  }

  modalClose = () => {
    this.modalController.dismiss();
  }

}
