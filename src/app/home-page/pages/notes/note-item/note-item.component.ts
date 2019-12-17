import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '@primetec/primetec-angular';
import {ModalController} from '@ionic/angular';
import {File} from '@ionic-native/file/ngx';
import {PreviewAnyFile} from '@ionic-native/preview-any-file/ngx';

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

  constructor(
    private modalController: ModalController,
    private file: File,
    private previewAnyFile: PreviewAnyFile
  ) {

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
    if (this.getPhotoPath()) {
      const fileName = `${this.item.id}.jpeg`;
      const dirName = this.file.tempDirectory;
      const filePath = dirName + '/' + fileName;
      const mimeType = 'image/jpeg';

      const resp = await this.createFile(dirName, fileName, mimeType);

      if (resp) {
        console.log(filePath);
        this.previewAnyFile.preview(filePath)
          .then((res: any) => console.log(res))
          .catch((error: any) => console.error(error));
      } else {
        console.log('no resp');
      }
    }
  }

  /**
   * createFile
   * @param dirName
   * @param fileName
   * @param mimeType
   */
  private createFile = (dirName: string, fileName: string, mimeType: string) => {
    return new Promise(resolve => {
      this.file.createFile(dirName, fileName, true).then((data) => {

        const byteCharacters = atob(this.item.image);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {type: mimeType});

        if (blob) {
          this.file.writeExistingFile(dirName, fileName, blob).then((response) => {
            resolve(true);
          }, error => {
            console.log('writeExistingFile', error);
            resolve(false);
          });
        } else {
          console.log('no blob');
          resolve(false);
        }
      }, error => {
        console.log('createFile', error);
        resolve(false);
      });
    });
  }
}
