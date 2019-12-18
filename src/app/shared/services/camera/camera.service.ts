import {Injectable} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ToastService} from '../toast/toast.service';
import {LoaderService} from '../loader/loader.service';

@Injectable()
export class CameraService {

  private readonly commonOptions: CameraOptions;

  constructor(
    private camera: Camera,
    private toastService: ToastService,
    private loaderService: LoaderService,
  ) {
    this.commonOptions = {
      quality: 100,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1080,
      targetHeight: 720,
      correctOrientation: true
    };
  }

  /**
   * openCamera
   */
  public openCamera = async () => {
    const options: CameraOptions = Object.assign({}, this.commonOptions, {
      saveToPhotoAlbum: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA
    });

    return await this.getImage(options);
  }

  /**
   * openGallery
   */
  public openGallery = async () => {
    const options: CameraOptions = Object.assign({}, this.commonOptions, {
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    });

    return await this.getImage(options);
  }

  /**
   * getImage
   * @param options
   */
  private getImage = (options): Promise<any> => {
    return new Promise(resolve => {
      this.camera.getPicture(options).then((image) => {
        resolve(image);
      }, error => {
        this.toastService.warningToast(error);
        resolve(null);
      });
    });
  }

}
