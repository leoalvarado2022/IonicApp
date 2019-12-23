import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {ValidateRut} from '@primetec/primetec-angular';
import {Store} from '@ngrx/store';
import * as MenuAction from '../../../store/menu/menu.action';
import {ModalController} from '@ionic/angular';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {HttpService} from '../../../shared/services/http/http.service';
import {CameraService} from '../../../shared/services/camera/camera.service';
import {Device} from '@ionic-native/device/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profile: any = null;
  public data: any = null;

  public registerForm: FormGroup;
  public avatarPreview: any = null;

  private rutValue: string;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private loaderService: LoaderService,
    private toastService: ToastService,
    private router: Router,
    private store: Store<any>,
    private modalController: ModalController,
    public device: Device,
    private authService: AuthService,
    private httpService: HttpService,
    private cameraService: CameraService
  ) {
    this.initForm();
  }

  async ngOnInit() {
    this.data = await this.userService.getUserData();
    if (this.data.user) {
      this.profile = this.data.user;
      this.avatarPreview = `data:image/jpeg;base64,${this.data.user.avatar}`;
      this.initForm(this.data.user);
    }
  }

  initForm = (data?) => {
    this.rutValue = data && data !== null ? data.rut : null;

    this.registerForm = this.formBuilder.group({
      nombre: [data && data !== null ? data.name : null, Validators.required],
      avatar: [data && data !== null ? data.avatar : null],
      apellido_paterno: [data && data !== null ? data.lastName : null, Validators.required],
      apellido_materno: [data && data !== null ? data.surName : null, Validators.required],
      rut: [{value: data && data !== null ? data.rut : null, disabled: true}, [
        Validators.required,
        ValidateRut
      ]],
      telefono: [data && data !== null ? data.phone : null, [
        Validators.required,
        // Validators.pattern('^(([+569])([0-9]{11}))$')
      ]
      ],
      email: [data && data !== null ? data.email : null, [
        Validators.required,
        Validators.email
      ]],
      acceso: [data && data !== null ? data.access.toString() : null, Validators.required],
    });

    /**
     * avatar: [data && data !== null ? null : null],
     */
  }

  /**
   * onSubmit
   */
  public async onSubmit() {
    const list = {
      password: '',
      token: this.authService.getToken(),
    };
    const data = Object.assign(list, this.registerForm.value);
    data.rut = this.rutValue;

    await this.update(data);
  }

  /**
   * changePassword
   */
  changePassword = async () => {
    const modal = await this.modalController.create({
      component: ChangePasswordComponent,
      cssClass: 'change-modal-password'
    });
    return await modal.present();
  }

  /**
   * update
   * @param data
   */
  private async update(data): Promise<any> {

    await this.loaderService.startLoader();

    return new Promise((resolve, reject) => {
      this.userService.updateUser(data).subscribe(success => {

        if (this.data.user) {
          this.data.user.access = data.acceso;
          this.data.user.surName = data.apellido_materno;
          this.data.user.lastName = data.apellido_paterno;
          this.data.user.name = data.nombre;
          this.data.user.phone = data.telefono;
          this.data.user.avatar = data.avatar;
        }

        this.userService.setUserData(this.data);
        this.store.dispatch(new MenuAction.AddProfile(this.data));
        this.ngOnInit();

        // this.toastService.successToast('Se actualizo el usuario correctamente, inicia sesión');
        this.router.navigate(['home-page']);
        this.loaderService.stopLoader();
        resolve(true);
      }, error => {
        this.loaderService.stopLoader();
        this.httpService.errorHandler(error);
        resolve(false);
      });
    });
  }

  /**
   * openCamera
   */
  public openCamera = async () => {
    const image = await this.cameraService.openCamera();

    if (image) {
      this.getImage(image);
    }
  }

  /**
   * openGallery
   */
  public openGallery = async () => {
    const image = await this.cameraService.openGallery();

    if (image) {
      this.getImage(image);
    }
  }

  /**
   * getImage
   * @param image
   */
  private getImage = (image: string) => {
    const imageUrl = image;
    this.avatarPreview = `data:image/jpeg;base64,${image}`;

    this.registerForm.patchValue({
      avatar: imageUrl
    });

    this.registerForm.updateValueAndValidity();
  }
}
