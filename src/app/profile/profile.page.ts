import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoaderService} from '../services/loader/loader.service';
import {ToastService} from '../services/toast/toast.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
import {ValidateRut} from '@primetec/primetec-angular';
import {Store} from '@ngrx/store';
import * as MenuAction from '../store/menu/menu.action';
import {ModalController} from '@ionic/angular';
import {ChangePasswordComponent} from './change-password/change-password.component';

// import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

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

  constructor(
      private userService: UserService,
      private formBuilder: FormBuilder,
      private loaderService: LoaderService,
      private toastService: ToastService,
      private router: Router,
      public store: Store<any>,
      public modalController: ModalController,
      // public _detectPlatform: DetectPlatformService,
      private authService: AuthService,
      // private camera: Camera
  ) {
    this.initForm();
  }

  async ngOnInit() {
    this.data = await this.userService.getUserData();
    if (this.data.user) {
      this.profile = this.data.user;
      this.avatarPreview = this.data.user.avatar;
      this.initForm(this.data.user);
    }
  }

  initForm = (data?) => {
    this.registerForm = this.formBuilder.group({
      nombre: [data && data !== null ? data.name : null, Validators.required],
      apellido_paterno: [data && data !== null ? data.lastName : null, Validators.required],
      apellido_materno: [data && data !== null ? data.surName : null, Validators.required],
      rut: [data && data !== null ? data.rut : null, [
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

    await this.update(data);
  }

  /**
   * update
   * @param data
   */
  private async update(data): Promise<any> {

    await this.loaderService.showLoader();

    return new Promise((resolve, reject) => {
      this.userService.updateUser(data).subscribe(success => {

        if (this.data.user) {
          this.data.user.access = data.acceso;
          this.data.user.surName = data.apellido_materno;
          this.data.user.lastName = data.apellido_paterno;
          this.data.user.name = data.nombre;
          this.data.user.phone = data.telefono;
          //this.data.user.avatar = data.avatar;
        }

        this.userService.setUserData(this.data);
        this.store.dispatch(new MenuAction.AddProfile(this.data))
        this.ngOnInit();

        this.toastService.successToast('Se actualizo el usuario correctamente, inicia sesión');
        this.loaderService.hideLoader();
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
        /*
        const result = String(reader.result).split(',')[1];
        this.avatarPreview = 'data:image/png;base64,' + result;
        this.registerForm.controls['avatar'].patchValue(this.avatarPreview);
        */
      };
    }
  }

  changePassword = async () => {
    const modal = await this.modalController.create({
      component: ChangePasswordComponent,
      cssClass: 'change-modal-password'
    });
    return await modal.present();
  };

  /**
   * onFileCamera
   * @param event
   */
  // public onFileCamera = async (sourceType: any, uri: any) => {
  //
  // 	const options: CameraOptions = {
  // 		quality: 50,
  // 		destinationType: uri,
  // 		encodingType: this.camera.EncodingType.JPEG,
  // 		mediaType: this.camera.MediaType.PICTURE,
  // 		saveToPhotoAlbum: true,
  //     targetWidth: 300,
  //     targetHeight: 300,
  //     correctOrientation: true,
  // 		sourceType: sourceType
  // 	};
  //
  //   this.loaderService.showLoader();
  //
  // 	this.camera.getPicture(options).then((imageData) => {
  // 		// imageData is either a base64 encoded string or a file URI
  // 		// If it's base64 (DATA_URL):
  // 		console.log(imageData);
  //
  // 		const image = 'data:image/jpeg;base64,' + imageData;
  // 		this.avatarPreview = image;
  //     this.registerForm.controls['avatar'].patchValue(this.avatarPreview);
  //     this.loaderService.hideLoader();
  //
  //
  // 	}, (err) => {
  // 		// Handle error
  // 		this.loaderService.hideLoader();
  // 	});
  // };

}
