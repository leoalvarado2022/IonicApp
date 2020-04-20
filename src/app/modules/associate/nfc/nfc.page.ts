import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NativeAudio} from '@ionic-native/native-audio/ngx';
import {AlertController, Platform} from '@ionic/angular';
import {Ndef, NFC} from '@ionic-native/nfc/ngx';
import {Device} from './device';
import {StoreService} from '../../../shared/services/store/store.service';
import {ModalController} from '@ionic/angular';
import {AssociateWorkPage} from './associate-work/associate-work.page';

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

  constructor(public nativeAudio: NativeAudio,
              private platform: Platform,
              public nfc: NFC,
              public ndef: Ndef,
              private ref: ChangeDetectorRef,
              public storeService: StoreService,
              public modalController: ModalController,
              private alertCtrl: AlertController) {
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
    // if (this.platform.is('ios')) {
    //   this.notSupported = true;
    //   return;
    // } else {
    this.openNFCScanner();
    // }
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
    let exist = this.list.find(value => value.id_device === id);

    if (!exist) {
      exist = this.scanned.find(value => value.id_device === id);
    }

    if (!exist) {
      exist = this.storeService.getPreDevicesToRecord();
      exist = exist.find(value => value.id_device === id);
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
      this.scanned.unshift(exist);
      this.nativeAudio.play('beep');
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
      return;
    }
    this.selected = device;
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
      console.log(data, 'dataMOdal');

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
    const deviceList = this.list;
    let listToRecord: any = this.storeService.getPreDevicesToRecord();


    if (!listToRecord.length && !deviceList.length) {
      return;
    }

    if (deviceList.length) {
      listToRecord.concat(deviceList);
    }

    const devices = [];
    for (const obj of listToRecord) {
      if (obj.id_device === deleted.id_device && obj.link && obj.id_link === deleted.id_link && deleted.id) {
        obj.id = obj.id * -1;
        obj.status = -1;
        devices.push(obj);
      }
      if (obj.id_device !== deleted.id_device || obj.link && obj.id_link === deleted.id_link) {
        devices.push(obj);
      }
    }


    console.log(devices);

    // this.storeService.setPreDevices(devices);

    return true;
  }
}
