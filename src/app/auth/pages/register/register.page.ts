import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {confirmPassword} from '../../../validators/confirm-password.validator';
import {UserService} from '../../../shared/services/user/user.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {DetectPlatformService} from '../../../shared/services/detect-platform/detect-platform.service';
import {cleanRut, formatRut, ValidateRut} from '@primetec/primetec-angular';

import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {HttpService} from '../../../shared/services/http/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public registerForm: FormGroup;
  public avatarPreview: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loaderService: LoaderService,
    private toastService: ToastService,
    private router: Router,
    public detectPlatformService: DetectPlatformService,
    private authService: AuthService,
    public camera: Camera,
    private httpService: HttpService
  ) {

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      names: ['', Validators.required],
      lastName: ['', Validators.required],
      surName: ['', Validators.required],
      rut: ['', [
        Validators.required,
        ValidateRut
      ]],
      phone: ['+569', [
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
        this.avatarPreview = `data:image/png;base64,${result}`;
        this.registerForm.controls.avatar.patchValue(this.avatarPreview);
      };
    }
  }

  /**
   * formatIdentifier
   * @param identifier
   */
  public formatIdentifier = (rut: string) => {

    if (rut.length > 0) {
      this.registerForm.patchValue({
        rut: formatRut(rut)
      });
    } else {
      this.registerForm.patchValue({
        rut: cleanRut(rut)
      });
    }

    return rut;
  }

  /**
   * onFileCamera
   * @param event
   */
  public onFileCamera = async (sourceType: any, uri: any) => {
    if (this.detectPlatformService.hasCordova) {
      const options: CameraOptions = {
        quality: 50,
        destinationType: uri,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum: true,
        targetWidth: 300,
        targetHeight: 300,
        correctOrientation: true,
        sourceType
      };

      this.loaderService.startLoader();

      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        // console.log(imageData);

        const image = `data:image/jpeg;base64,${imageData}`;
        this.avatarPreview = image;
        this.registerForm.controls.avatar.patchValue(this.avatarPreview);
        this.loaderService.stopLoader();

      }, (err) => {
        // Handle error
        this.loaderService.stopLoader();
      });
    } else {
      this.toastService.warningToast('Cordova requerido');
    }
  }

  /**
   * create
   * @param data
   */
  private async create(data): Promise<any> {
    await this.loaderService.startLoader();
    return new Promise((resolve, reject) => {
      this.userService.createUser(data).subscribe(success => {
        this.toastService.successToast('Se creo el usuario correctamente, inicia sesión');
        this.loaderService.stopLoader();
        this.registerForm.reset();
        this.router.navigate(['auth/login']);
        resolve(true);
      }, error => {
        this.loaderService.stopLoader();
        this.httpService.errorHandler(error);
        resolve(false);
      });
    });
  }
}
