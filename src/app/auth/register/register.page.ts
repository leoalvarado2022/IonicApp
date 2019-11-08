import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {rutValidator} from '../../validators/rut.validator';
import {confirmPassword} from '../../validators/confirm-password.validator';
import {UserService} from '../../services/user/user.service';
import {LoaderService} from '../../services/loader/loader.service';
import {ToastService} from '../../services/toast/toast.service';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {DetectPlatformService} from '../../services/detect-platform/detect-platform.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  public registerForm: FormGroup;
  public avatarPreview: any = null;

  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loaderService: LoaderService,
    private toastService: ToastService,
    private router: Router,
    public _detectPlatform: DetectPlatformService,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group({
      names: ['', Validators.required],
      lastName : ['', Validators.required],
      surName : ['', Validators.required],
      rut: ['', [
        Validators.required,
        rutValidator
      ]],
      phone : ['+569', [
        Validators.required,
        // Validators.pattern('^(([+569])([0-9]{11}))$')
      ]
      ],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      avatar: [''],
      access: ['1', Validators.required],
    }, {validator: confirmPassword});
  }

  /**
   * onSubmit
   */
  public async onSubmit() {
    const data = Object.assign({}, this.registerForm.value);
    await this.create(data);
  }

  /**
   * create
   * @param data
   */
  private async create(data): Promise<any> {
    await this.loaderService.showLoader();
    return new Promise((resolve, reject) => {
      this.userService.createUser(data).subscribe(success => {
        this.toastService.successToast('Se creo el usuario correctamente, inicia sesión');
        this.loaderService.hideLoader();
        this.registerForm.reset();
        this.router.navigate(['auth/login']);
        resolve(true);
      }, error => {
        const msg = this.authService.errorsHandler(error);
        this.loaderService.hideLoader();
        this.toastService.errorToast(msg);
        resolve(false);
      });
    });
  }

  /**
   * onFileChange
   * @param event
   */
  public onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.avatarPreview = null;
      const reader = new FileReader();
      const file = event.target.files[0];

      // console.log(file);
      const size = (file.size / 1024) / 1024;
      if (size >= 1.2) {
        this.toastService.warningToast('La imagen supera el limite. No puede ser mayor 1.2MB');
        return;
      }

      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = String(reader.result).split(',')[1];
        this.avatarPreview = 'data:image/png;base64,' + result;
        this.registerForm.controls['avatar'].patchValue(this.avatarPreview);
      };
    }
  }

}
