import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ToastService} from '../../services/toast/toast.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {

  @Input() image: string = null;

  constructor(
    private modalController: ModalController,
    private toastService: ToastService
  ) {

  }

  ngOnInit() {

  }

  public showError = () => {
    this.toastService.warningToast('No se puede mostrar la imagen');
    this.closeModal();
  };

  /**
   * closeModal
   */
  public closeModal = () => {
    this.modalController.dismiss(status);
  }
}
