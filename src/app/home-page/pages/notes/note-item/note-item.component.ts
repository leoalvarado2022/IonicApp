import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '@primetec/primetec-angular';
import {ModalController} from '@ionic/angular';
import {ImageViewerComponent} from '../../../../shared/components/image-viewer/image-viewer.component';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
})
export class NoteItemComponent implements OnInit {

  @Output() noteClicked: EventEmitter<Note | null> = new EventEmitter<Note | null>();
  @Output() deleteNote: EventEmitter<Note | null> = new EventEmitter<Note | null>();
  @Input() item: Note = null;
  @Input() slideDisabled = true;

  constructor(private modalController: ModalController) {

  }

  ngOnInit() {

  }

  /**
   * getPhotoPath
   */
  public getPhotoPath = () => {
    if (this.item) {
      return 'data:image/jpeg;base64,' + this.item.image;
    }

    return null;
  }

  /**
   * itemClicked
   * @param item
   */
  public itemClicked = (item: Note = null) => {
    this.noteClicked.emit(item);
  }

  /**
   * deleteItem
   * @param item
   */
  public deleteItem = (item: Note) => {
    this.deleteNote.emit(item);
  }

  /**
   * viewPicture
   */
  public viewPicture = async () => {
    const modal = await this.modalController.create({
      component: ImageViewerComponent,
      componentProps: {
        image: this.getPhotoPath()
      },
      backdropDismiss: false,
      keyboardClose: false,
      cssClass: 'full-screen-modal'
    });

    return await modal.present();
  }
}
