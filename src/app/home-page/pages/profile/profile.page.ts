import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {ValidateRut} from '@primetec/primetec-angular';
import {Store} from '@ngrx/store';
import {ModalController} from '@ionic/angular';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {HttpService} from '../../../shared/services/http/http.service';
import {CameraService} from '../../../shared/services/camera/camera.service';
import {Device} from '@ionic-native/device/ngx';
import {StoreService} from '../../../shared/services/store/store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public profile: any = null;
  public avatarPreview: any = null;
  private rutValue: string;
  public registerForm: FormGroup;

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
    private cameraService: CameraService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.loadUserData();

    this.registerForm = this.formBuilder.group({
      id: [this.profile.id, Validators.required],
      nombre: [this.profile.name, Validators.required],
      avatar: [this.profile.avatar],
      apellido_paterno: [this.profile.lastName, Validators.required],
      apellido_materno: [this.profile.surName, Validators.required],
      rut: [{value: this.profile.rut, disabled: true}, [
        Validators.required,
        ValidateRut
      ]],
      telefono: [this.profile.phone, Validators.required],
      email: [this.profile.email, [
        Validators.required,
        Validators.email
      ]],
      acceso: [this.profile.access.toString(), Validators.required],
    });
  }

  /**
   * loadUserData
   */
  private loadUserData = (): void => {
    this.profile = this.storeService.getUser();
    this.avatarPreview = `data:image/jpeg;base64,${this.profile.avatar}`;
    this.rutValue = this.profile.rut;
  }

  /**
   * onSubmit
   */
  public onSubmit() {
    const list = {
      password: '',
      token: this.storeService.getToken(),
    };
    const data = Object.assign(list, this.registerForm.value);

    data.rut = this.rutValue;
    this.update(data);
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
  private update = (data): void => {
    this.loaderService.startLoader();
    this.userService.updateUser(data).subscribe(success => {

      this.profile.access = data.acceso;
      this.profile.surName = data.apellido_materno;
      this.profile.lastName = data.apellido_paterno;
      this.profile.name = data.nombre;
      this.profile.phone = data.telefono;
      this.profile.avatar = data.avatar;

      this.storeService.setUser(this.profile);

      this.loaderService.stopLoader();
      this.router.navigate(['home-page']);
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
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
