import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NativeAudio} from '@ionic-native/native-audio/ngx';
import {AlertController, ModalController, Platform} from '@ionic/angular';
import {Ndef, NFC} from '@ionic-native/nfc/ngx';
import {Device} from './device';
import {StoreService} from '../../../shared/services/store/store.service';
import {AssociateWorkPage} from './associate-work/associate-work.page';
import {ToastService} from '../../../shared/services/toast/toast.service';
import * as moment from 'moment';

@Component({
  selector: 'app-nfc',
  templateUrl: './nfc.page.html',
  styleUrls: ['./nfc.page.scss'],
})
export class NfcPage implements OnInit, OnDestroy {

  notSupported = false;
  scanned = [];
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
              private ref: ChangeDetectorRef,
              public storeService: StoreService,
              public modalController: ModalController,
              private alertCtrl: AlertController,
              private toastService: ToastService) {
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

    this.list = this.storeService.getDevices();
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
          this.pullDevice(id, event.type.toUpperCase());
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
  pullDevice(id, type) {

    // reiniciar todo
    this.error = false;
    this.sync = false;
    this.selected = undefined;

    let exist = this.list.find(value => value.id_device === id);

    if (!exist) {
      exist = this.scanned.find(value => value.id_device === id);
    }

    if (!exist) {
      exist = this.storeService.getDevicesToRecord();
      exist = exist.find(value => value.id_device === id && value.id === 0);
    }

    if (exist) {
      const findRecord = this.storeService.getDevicesToRecord();
      const row = findRecord.find(value => value.id_device === id);

      if (row) {
        if (exist.id > 0 && row.id < 0 && row.id_device === exist.id_device) {
          exist = undefined;
        }
      }
    }


    if (!exist) {
      let device = new Device();
      device.id_device = id;
      device.type = type;
      this.scanned.unshift(device);
      this.nativeAudio.play('error').then(() => {
      }).catch((ex) => {
        console.log(ex);
      });
    } else {
      // this.errors(exist);
      console.log(this.scanned, 'scanned');
      console.log(exist, 'exist');

      const indexScanned = this.scanned.find(item => item.id_device === exist.id_device);
      console.log(indexScanned, 'indexScanned');

      if (!indexScanned) {
        this.scanned.unshift(exist);
        this.nativeAudio.play('beep');
      }
    }
    this.ref.markForCheck();
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

  errors(device: any)
  {
    const devicesWithErrors = this.storeService.getDevicesWithErrors();
    const devicesToRecord = this.storeService.getDevicesToRecord();
    const noSync = devicesToRecord.find(item => item.tempId === device.tempId);

    // console.log(devicesWithErrors, 'devicesWithErrors');

    const error = devicesWithErrors.find(item => item.id === device.tempId);

    // console.log(devicesWithErrors, device, error, noSync);

    if (error) {
      this.error = true;
      this.toastService.errorToast(error.response);
    } else {
      if (noSync){
        this.sync = true;
        this.toastService.warningToast('No sincronizado');
      }
    }


  }

  /**
   * @description asociar un trabajador con el tag
   */
  async associateWork() {
    const modal = await this.modalController.create({
      component: AssociateWorkPage,
      componentProps: {tag: this.selected}
    });

    modal.onDidDismiss().then((data) => {
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

    let alert = await this.alertCtrl.create({
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
      const tempId = this.storeService.getDeviceTempId();
      deleted.id = deleted.id * -1;
      deleted.tempId = tempId;
    } else {
      deleted.delete = true;
    }

    deleted.date = moment().format('YYYY-MM-DD HH:mm:ss');

    // console.log(deleted, 'deleted');

    this.storeService.addDevicesToRecord(deleted);
    return true;
  }
}
