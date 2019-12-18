import {Component, Input, OnInit} from '@angular/core';
import {CostCenter, Note} from '@primetec/primetec-angular';
import {AuthService} from '../../../../shared/services/auth/auth.service';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContractDetailService} from '../../../../shared/services/contract-detail/contract-detail.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {DetectPlatformService} from '../../../../shared/services/detect-platform/detect-platform.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {CameraService} from '../../../../shared/services/camera/camera.service';

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

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private httpService: HttpService,
    private contractDetailService: ContractDetailService,
    private toastService: ToastService,
    public detectPlatformService: DetectPlatformService,
    private loaderService: LoaderService,
    private cameraService: CameraService
  ) {

  }

  ngOnInit() {
    this.userConnection = this.authService.getCompany();

    this.noteForm = this.formBuilder.group({
      id: [this.note ? this.note.id : 0, Validators.required],
      costCenter: [this.costCenter.id, Validators.required],
      user: [this.userConnection.user, Validators.required],
      note: [{value: this.note ? this.note.note : '', disabled: !!this.note}, Validators.required],
      image: [{value: this.note ? this.note.image : '', disabled: !!this.note}, Validators.required]
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
   * storeNote
   * @param data
   */
  private storeNote = (data: any) => {
    this.loaderService.startLoader('Guardando nota');
    this.contractDetailService.storeNote(data).subscribe(success => {
      this.loaderService.stopLoader();
      this.closeModal(true);
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
    this.imageSrc = `data:image/jpeg;base64,${image}`;

    this.noteForm.patchValue({
      image: imageUrl
    });

    this.noteForm.updateValueAndValidity();
  }

}
