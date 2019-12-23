import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {confirmPassword} from '../../../validators/confirm-password.validator';
import {UserService} from '../../../shared/services/user/user.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {cleanRut, formatRut, ValidateRut} from '@primetec/primetec-angular';
import {HttpService} from '../../../shared/services/http/http.service';
import {Device} from '@ionic-native/device/ngx';
import {CameraService} from '../../../shared/services/camera/camera.service';

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
    private authService: AuthService,
    private httpService: HttpService,
    public device: Device,
    private cameraService: CameraService
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
