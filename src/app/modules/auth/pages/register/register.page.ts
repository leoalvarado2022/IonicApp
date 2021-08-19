import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPassword } from '../../../../validators/confirm-password.validator';
import { UserService } from '../../../../shared/services/user/user.service';
import { LoaderService } from '../../../../shared/services/loader/loader.service';
import { ToastService } from '../../../../shared/services/toast/toast.service';
import { Router } from '@angular/router';
import { cleanRut, formatRut, ValidateRut } from '@primetec/primetec-angular';
import { HttpService } from '../../../../shared/services/http/http.service';
import { Device } from '@ionic-native/device/ngx';
import { CameraService } from '../../../../shared/services/camera/camera.service';
import {AppService} from '../../../../services/app/app.service';
import {DeviceService} from '../../../../services/device/device.service';
import {ActionSheetController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public showCordovaFeatures = false;

  public registerForm: FormGroup;
  public avatarPreview: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loaderService: LoaderService,
    private toastService: ToastService,
    private router: Router,
    private httpService: HttpService,
    public appService: AppService,
    public device: Device,
    private cameraService: CameraService,
    public deviceService: DeviceService,
    private platform: Platform,
    public actionSheetController: ActionSheetController,
  ) {
    this.platform.ready().then(() => {
      this.showCordovaFeatures = this.platform.is('cordova');
    });
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
      phone: ['+569'],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      avatar: [''],
      access: ['1', Validators.required],
    }, { validator: confirmPassword });
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
   * create
   * @param data
   */
  private async create(data): Promise<any> {
    await this.loaderService.startLoader();
    return new Promise((resolve) => {
      this.userService.createUser(data).subscribe(() => {
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

  public connectionsActionSheet = async () => {
    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccione Conexion',
      buttons: [
        {
          text: 'Conexion QA',
          icon: 'cloud',
          handler: () => {
            localStorage.setItem('connectionEnvironment', 'qa');
            this.toastService.successToast('Conexión cambiada a QA');
          }
        },
        {
          text: 'Conexion Producción',
          icon: 'cloud',
          handler: () => {
            localStorage.setItem('connectionEnvironment', 'prod');
            this.toastService.successToast('Conexión cambiada a PROD');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {

          }
        }]
    });

    await actionSheet.present();
  }

  public showQa = (): string => {
    return localStorage.getItem('connectionEnvironment') === 'qa' ? 'QA' : '';
  }
}
