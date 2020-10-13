import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { Ndef, NFC } from '@ionic-native/nfc/ngx';
import { Device } from './device';
import { AssociateWorkPage } from './associate-work/associate-work.page';
import * as moment from 'moment';
import { StorageSyncService } from '../../../services/storage/storage-sync/storage-sync.service';
import { DeviceSyncService } from '../../../services/storage/device-sync/device-sync.service';

@Component({
  selector: 'app-nfc',
  templateUrl: './nfc.page.html',
  styleUrls: ['./nfc.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NfcPage implements OnInit, OnDestroy {

  notSupported = false;
  scanned: Array<any>;
  $listener: Subscription;
  scanning = false;
  selected;
  isDelete = false;
  list = [];
  error = false;
  sync = false;

  constructor(public nativeAudio: NativeAudio,
    private platform: Platform,
    public nfc: NFC,
    public ndef: Ndef,
    public _changeDetectorRef: ChangeDetectorRef,
    public modalController: ModalController,
    private _storageSyncService: StorageSyncService,
    private _deviceSyncService: DeviceSyncService,
    private alertCtrl: AlertController
  ) {

  }

  /**
   * desacativar audios y unsuscribe data de la lista
   */
  ngOnDestroy(): void {
    if (this.$listener) {
      this.$listener.unsubscribe();
    }
    this.nativeAudio.unload('beep').then(() => {
    });
    this.nativeAudio.unload('error').then(() => {
    });
  }


  /**
   * @description cargar la data predeterminada y activar los audios
   */
  preload() {
    this.scanned = [];
    this.scanning = false;

    this.nativeAudio.preloadSimple('beep', 'assets/sounds/beep.mp3').then(() => {
    }).catch((ex) => {
      console.log(ex);
    });

    this.nativeAudio.preloadSimple('error', 'assets/sounds/error.mp3').then(() => {
    }).catch((ex) => {
      console.log(ex);
    });

    this._storageSyncService.getDevices().then(data => {
      this.list = data;
    });
  }

  ngOnInit() {
    this.preload();

    // si es escritorio o web no deja
    if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
      this.notSupported = true;
      return;
    }

    // ios no deja usar NFC
    if (this.platform.is('ios')) {
      this.notSupported = true;
      return;
    } else {
      this.openNFCScanner();
    }
  }

  /**
   * @description abrir el escaner
   */
  openNFCScanner() {
    this.scanned = [];
    if (this.$listener) {
      this.$listener.unsubscribe();
    }

    if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
      return;
    }

    this.$listener =
      this.nfc
        .addTagDiscoveredListener(success => console.log(success, 'success'), onFailure => {
          if (onFailure === 'NFC_DISABLED') {
            this.notSupported = true;
          }
          console.log(onFailure, 'onFailure');
        })
        .subscribe(event => {
          // conseguir el id del tag
          const id = this.nfc.bytesToHexString(event.tag.id);

          // guardar y transformar data para guardar
          this.pullDevice(id, event.type.toUpperCase()).then();
        }, error => {
          console.log(error, 'error');
          this.notSupported = true;
        });
  }

  /**
   * @description buscar la  lista de trabajadores con el tag de lo contrario crearlo
   * @param id
   * @param type
   */
  async pullDevice(id, type) {

    this.error = false;
    this.sync = false;
    this.selected = undefined;

    let exist = this.list.find(value => value.id_device === id);

    if (!exist) {
      exist = this.scanned.find(value => value.id_device === id);
    }

    if (!exist) {
      exist = await this._deviceSyncService.getDevicesToRecord();
      exist = exist.find(value => value.id_device === id && value.id === 0);
    }

    if (exist) {
      const findRecord = await this._deviceSyncService.getDevicesToRecord();
      const row = findRecord.find(value => value.id_device === id);

      if (row) {
        if (exist.id > 0 && row.id < 0 && row.id_device === exist.id_device) {
          exist = undefined;
        }
      }
    }

    if (!exist) {
      const device = new Device();
      device.id_device = id;
      device.type = type;
      this.scanned.unshift(device);
      this.nativeAudio.play('error').then(() => {
      }).catch((ex) => {
        console.log(ex);
      });
    } else {
      const indexScanned = this.scanned.find(item => item.id_device === exist.id_device);

      if (!indexScanned) {
        this.scanned.unshift(exist);
        this.nativeAudio.play('beep');
      }
    }

    this._changeDetectorRef.detectChanges();

  }

  /**
   * @description activar para asociar trabajador o desasociarlo
   * @param device
   */
  onPress(device) {
    this.isDelete = false;
    if (device.link && device.id_link) {
      this.isDelete = true;
      this.selected = device;
      this.deassociateWork();
      return;
    }
    this.selected = device;

    this.associateWork();
  }

  /**
   * @description asociar un trabajador con el tag
   */
  async associateWork() {
    const modal = await this.modalController.create({
      component: AssociateWorkPage,
      componentProps: { tag: this.selected }
    });

    modal.onDidDismiss().then((data: any) => {
      // console.log(data);
      if (data.data && data.data !== null) {
        const scanned = this.scanned.filter(value => value.id_device !== data.data.id_device);
        scanned.push(data.data);
        this.scanned = scanned;
        this._changeDetectorRef.detectChanges();
      }
      this.selected = undefined;
    });

    return await modal.present();
  }

  /**
   * @description desasociar trabajador
   */
  async deassociateWork() {

    const cancelButton = {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
      }
    };

    const deleteButton = {
      text: 'Desasociar',
      handler: () => {
        this.deleteDevices(this.selected);
        this.scanned = [];
      }
    };

    const alert = await this.alertCtrl.create({
      header: '¿Seguro que desea desasociar este trabajador?',
      buttons: [cancelButton, deleteButton]
    });

    await alert.present();
  }


  /**
   * @description borrar un tag
   * @param deleted
   */
  deleteDevices(deleted: any) {

    this.selected = undefined;
    this.isDelete = false;
    this.scanned = [];

    if (deleted.id && deleted.id > 0) {
      this._deviceSyncService.getDeviceTempId().then(tempId => {
        deleted.id = deleted.id * -1;
        deleted.tempId = tempId;
      });

    } else {
      deleted.delete = true;
    }

    deleted.date = moment().format('YYYY-MM-DD HH:mm:ss');

    this._deviceSyncService.addDevicesToRecord(deleted).then();
    this._changeDetectorRef.detectChanges();
    return true;
  }
}
