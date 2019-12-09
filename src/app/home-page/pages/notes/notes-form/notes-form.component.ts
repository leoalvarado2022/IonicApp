import {Component, Input, OnInit} from '@angular/core';
import {CostCenter, Note} from '@primetec/primetec-angular';
import {AuthService} from '../../../../shared/services/auth/auth.service';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContractDetailService} from '../../../../shared/services/contract-detail/contract-detail.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {DetectPlatformService} from '../../../../shared/services/detect-platform/detect-platform.service';
import {HttpService} from '../../../../shared/services/http/http.service';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.scss'],
})
export class NotesFormComponent implements OnInit {

  @Input() costCenter: CostCenter;
  @Input() note: Note = null;

  public noteForm: FormGroup;
  public showErrors = false;
  public imageSrc = '';
  private userConnection: any;
  private commonOptions: CameraOptions = {
    quality: 100,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 1080,
    targetHeight: 720,
    correctOrientation: true
  };

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private httpService: HttpService,
    private contractDetailService: ContractDetailService,
    private toastService: ToastService,
    private camera: Camera,
    public detectPlatformService: DetectPlatformService,
  ) {

  }

  ngOnInit() {
    this.userConnection = this.authService.getCompany();

    this.noteForm = this.formBuilder.group({
      id: [this.note ? this.note.id : 0, Validators.required],
      costCenter: [this.costCenter.id, Validators.required],
      user: [this.userConnection.user, Validators.required],
      note: [this.note ? this.note.note : '', Validators.required],
      image: [this.note ? this.note.image : '', Validators.required]
    });

    this.imageSrc = this.note ? 'data:image/jpeg;base64,' + this.note.image : '';
  }

  /**
   * closeModal
   */
  public closeModal = (status: boolean = false) => {
    this.noteForm.reset();
    this.modalController.dismiss(status);
  }

  /**
   * submit
   */
  public submit = () => {
    if (this.noteForm.valid) {
      this.showErrors = false;
      const note = Object.assign({}, this.noteForm.value);

      this.storeNote(note);
    } else {
      this.showErrors = true;
    }
  }

  /**
   * openCamera
   */
  public openCamera = () => {
    if (this.detectPlatformService.hasCordova) {
      const options: CameraOptions = Object.assign({}, this.commonOptions, {
        saveToPhotoAlbum: true,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA
      });

      this.getImage(options);
    } else {
      this.toastService.warningToast('Cordova requerido');
    }
  }

  /**
   * openGallery
   */
  public openGallery = () => {
    if (this.detectPlatformService.hasCordova) {
      const options: CameraOptions = Object.assign({}, this.commonOptions, {
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      });

      this.getImage(options);
    } else {
      this.toastService.warningToast('Cordova requerido');
    }
  }

  /**
   * storeNote
   * @param data
   */
  private storeNote = (data: any) => {
    this.contractDetailService.storeNote(data).subscribe(success => {
      this.closeModal(true);
    }, error => {
      this.httpService.errorHandler(error);
    });
  }

  /**
   * getImage
   * @param options
   */
  private getImage = (options) => {
    this.camera.getPicture(options).then((image) => {
      const imageUrl = image;
      this.imageSrc = `data:image/jpeg;base64,${image}`;

      this.noteForm.patchValue({
        image: imageUrl
      });

      this.noteForm.updateValueAndValidity();
    }, error => {
      this.toastService.warningToast(error);
    });
  }

}
