import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '@primetec/primetec-angular';
import {ModalController, Platform} from '@ionic/angular';
import {File} from '@ionic-native/file/ngx';
import {PreviewAnyFile} from '@ionic-native/preview-any-file/ngx';
import {Device} from '@ionic-native/device/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {ContractDetailService} from "../../../../shared/services/contract-detail/contract-detail.service";

declare var window;


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

  public iOs: boolean;

  constructor(
    private modalController: ModalController,
    private file: File,
    private previewAnyFile: PreviewAnyFile,
    private device: Device,
    private platform: Platform,
    private fileOpener: FileOpener,
    private contractDetailService: ContractDetailService
  ) {
    this.platform.ready().then(() => {
      this.iOs = this.platform.is('ios');
    });
  }

  ngOnInit() {

  }

  /**
   * getPhotoPath
   */
  public getPhotoPath = () => {
    if (this.item && this.item.image) {
      return 'data:image/jpeg;base64,' + this.item.image;
    }

    return null;
  };

  /**
   * itemClicked
   * @param item
   */
  public itemClicked = (item: Note = null) => {
    this.noteClicked.emit(item);
  };

  /**
   * deleteItem
   * @param item
   */
  public deleteItem = (item: Note) => {
    this.deleteNote.emit(item);
  };

  /**
   * viewPicture
   */
  public viewPicture = async () => {
    if (this.getPhotoPath() && this.device.cordova) {
      const bigImage = await this.getNoteImage(this.item.id);

      const fileName = `${this.item.id}.jpeg`;
      const dirName = this.iOs ? this.file.tempDirectory : this.file.externalApplicationStorageDirectory;
      const filePath = dirName + '/' + fileName;
      const mimeType = 'image/jpeg';

      const resp = await this.createFile(dirName, fileName, mimeType, bigImage);

      if (resp) {
        if (this.iOs) {
          this.previewAnyFile.preview(filePath)
            .then((res: any) => console.log(res))
            .catch((error: any) => console.error(error));
        } else {
          this.fileOpener.open(filePath, mimeType)
            .then((success) => {
              console.log('File is opened');
              console.log(success);
            })
            .catch(e => console.log('Error opening file', e));
        }
      } else {
        console.log('no resp');
      }
    }
  };

  /**
   * createFile
   * @param dirName
   * @param fileName
   * @param mimeType
   */
  private createFile = (dirName: string, fileName: string, mimeType: string, base64: string) => {
    return new Promise(resolve => {
      this.file.createFile(dirName, fileName, true).then((data) => {

        const byteCharacters = atob(base64);
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
  };

  /**
   * getNoteImage
   * @param id
   */
  private getNoteImage = (id: number): Promise<string | null> => {
    return new Promise<string | null>(resolve => {
      this.contractDetailService.getNoteImage(id.toString()).subscribe((success: any) => {
        resolve(success.image);
      }, error => {
        resolve(null);
      });
    });
  }

}
