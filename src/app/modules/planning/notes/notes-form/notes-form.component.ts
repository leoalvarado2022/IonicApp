import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {CostCenter, Note} from '@primetec/primetec-angular';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContractDetailService} from '../../services/contract-detail/contract-detail.service';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {DetectPlatformService} from '../../../../shared/services/detect-platform/detect-platform.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {CameraService} from '../../../../shared/services/camera/camera.service';
import {StoreService} from '../../../../shared/services/store/store.service';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.scss'],
})
export class NotesFormComponent implements OnInit, AfterContentInit {

  @Input() costCenter: CostCenter;
  @Input() note: Note = null;

  public noteForm: FormGroup;
  public imageSrc = '';
  public isSaving = false;
  public loadingImg = false;
  private userCompany: any;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private contractDetailService: ContractDetailService,
    private toastService: ToastService,
    public detectPlatformService: DetectPlatformService,
    private loaderService: LoaderService,
    private cameraService: CameraService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.userCompany = this.storeService.getActiveCompany();

    this.noteForm = this.formBuilder.group({
      id: [this.note ? this.note.id : 0, Validators.required],
      costCenter: [this.costCenter.id, Validators.required],
      user: [this.userCompany.user, Validators.required],
      note: [{value: this.note ? this.note.note : '', disabled: !!this.note}],
      image: [{value: this.note ? this.note.image : '', disabled: !!this.note}]
    });

    // this.imageSrc = this.note && this.note.image ? 'data:image/jpeg;base64,' + this.note.image : '';
  }

  ngAfterContentInit(): void {
    this.loadBigImage();
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
    if ((this.noteForm.get('note').value || this.noteForm.get('image').value) && !this.isSaving) {

      const note = Object.assign({}, this.noteForm.value);
      this.isSaving = true;
      this.storeNote(note);
    } else {
      this.isSaving = false;
      this.toastService.warningToast('Debe ingresar la nota o la imagen');
    }
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
   * loadBigImage
   */
  private loadBigImage = () => {
    if (this.note && this.note.image) {
      this.loadingImg = true;
      this.contractDetailService.getNoteImage(this.note.id.toString()).subscribe((success: any) => {
        this.imageSrc = 'data:image/jpeg;base64,' + success.image;
        this.loadingImg = false;
      }, error => {
        this.loadingImg = false;
        this.httpService.errorHandler(error);
      });
    }
  }

  /**
   * storeNote
   * @param data
   */
  private storeNote = (data: any) => {
    this.loaderService.startLoader('Guardando nota');
    this.contractDetailService.storeNote(data).subscribe(success => {
      this.isSaving = false;
      this.loaderService.stopLoader();
      this.closeModal(true);
    }, error => {
      this.isSaving = false;
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
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
