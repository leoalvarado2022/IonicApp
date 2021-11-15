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
import {StepperService} from '../../../services/storage/stepper/stepper.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {ToastService} from '../../../shared/services/toast/toast.service';

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
              private alertCtrl: AlertController,
              public stepperService: StepperService,
              private loaderService: LoaderService,
              private toastService: ToastService,
  ) {
    this.stepperService.syncStep.subscribe(step => {
      if (step === 'finished') {
        this._storageSyncService.getDevices().then(data => {
          this.list = data.filter(d => d.id_device);
        });
      }
    });
  }

  /**
   * desacativar audios y unsuscribe data de la lista
   */

  ngOnDestroy(): void {
    this.closeNFCScanner();
    this.nativeAudio.unload('beep').then(() => {});
    this.nativeAudio.unload('error').then(() => {});
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
      this.list = data.filter(d => d.id_device);
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
  closeNFCScanner() {
    if (this.$listener) {
      this.$listener.unsubscribe();
    }
  }
  /**
   * @description abrir el escaner
   */
  openNFCScanner(reset = true) {
    if (reset) {
      this.scanned = [];
    }
    this.closeNFCScanner();
    if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
      return;
    }
    this.$listener =
      this.nfc
        .addTagDiscoveredListener(success => console.log(success, 'success'), onFailure => {
          if (onFailure === 'NFC_DISABLED') {
            this.notSupported = true;
          }
          console.log(' => ', onFailure, 'onFailure');
        })
        .subscribe(event => {
          console.log('event ::: ', event);
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
    let check = false;

    const recorded = await this._deviceSyncService.getDevicesToRecord();

    let exist = recorded.find(value => value.id_device === id && value.id >= 0);

    if (!exist) {
      exist = this.scanned.find(value => value.id_device === id);
      if (!exist) {

        exist = this.list.find(value => value.id_device === id);

        if (exist) {
          check = recorded.find(d => d.id_device === exist.id_device && d.id < 0);
          if (check) {
            exist = undefined;
          }
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
    this.closeNFCScanner();
    this.isDelete = false;
    this.selected = device;
    if (device.link && device.id_link) {
      this.isDelete = true;
      this.deassociateWork();
      return;
    }
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
    modal.onDidDismiss().then(async (data: any) => {
      if (data.data) {
        const recorded = await this._deviceSyncService.getDevicesToRecord();
        const tmp = recorded.find(s => s.id_device === data.data.id_device && s.id >= 0);
        const idx = this.scanned.findIndex(s => s.id_device === tmp.id_device);

        if (idx > -1) {
          this.scanned.splice(idx, 1, tmp);
        }
        this.toastService.successToast('Trabajador asociado con éxito');
        this.openNFCScanner(false);
        this.selected = undefined;
        this._changeDetectorRef.detectChanges();
      } else {
        this.openNFCScanner(false);
        this.selected = undefined;
        this._changeDetectorRef.detectChanges();
      }
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
        this.selected = undefined;
        this.openNFCScanner(false);
        this._changeDetectorRef.detectChanges();
      }
    };
    const deleteButton = {
      text: 'Desasociar',
      handler: () => {
        this.deleteDevices(this.selected);
        // this.scanned = [];
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
  async deleteDevices(deleted: any) {
    this.selected = undefined;
    this.isDelete = false;
    // this.scanned = [];
    if (deleted.id && deleted.id > 0 && !deleted.tempId) {
      deleted.id = deleted.id * -1;
      this._deviceSyncService.getDeviceTempId().then(tempId => {
        deleted.tempId = tempId;
      });
    } else {
      deleted.delete = true;
    }
    // idx = this.scanned.findIndex(s => s.tempId === deleted.tempId);
    const idx = this.scanned.findIndex(s => s.id_link === deleted.id_link);
    if (idx >= 0) {
      this.scanned.splice(idx, 1);
    }

    deleted.date = moment().format('YYYY-MM-DD HH:mm:ss');
    await this.syncAndRefreshList(deleted);
    return true;
  }
  async syncAndRefreshList(deleted: any = {}) {
    this.loaderService.startLoader('Cargando...');
    this.closeNFCScanner();

    await this._deviceSyncService.addDevicesToRecord(deleted);

    this.openNFCScanner(false);
    this._changeDetectorRef.detectChanges();
    this.loaderService.stopLoader();
  }

  async tmpAssociate(workerId) {
    this.pullDevice(workerId, 'TAG').then();
  }
}
