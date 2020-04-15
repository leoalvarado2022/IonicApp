import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NativeAudio} from '@ionic-native/native-audio/ngx';
import {Platform} from '@ionic/angular';
import {Ndef, NFC} from '@ionic-native/nfc/ngx';
import {Device} from './device';
import {StoreService} from '../../../shared/services/store/store.service';

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
  selected = [];
  isDelete = false;
  list = [];

  constructor(public nativeAudio: NativeAudio,
              private platform: Platform,
              public nfc: NFC,
              public ndef: Ndef,
              private ref: ChangeDetectorRef,
              public storeService: StoreService) {
  }

  ngOnDestroy(): void {
    this.$listener.unsubscribe();
    this.nativeAudio.unload('beep').then(() => {
    });
    this.nativeAudio.unload('error').then(() => {
    });
  }

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

    if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
      return;
    }

    if (this.platform.is('ios')) {
      this.notSupported = true;
      return;
    } else {
      this.openNFCScanner();
    }
  }

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
        .addTagDiscoveredListener()
        .subscribe(event => {
          const id = this.nfc.bytesToHexString(event.tag.id);
          this.pullDevice(id, event.type.toUpperCase());
        });
  }

  pullDevice(id, type) {
    const exist = this.list.find(value => value.id_device === id);

    const scanned = this.scanned.find(value => value.id_device === id);

    if (!exist && !scanned) {
      let device = new Device();
      device.id_device = id;
      device.type = type;
      this.scanned.unshift(device);
      this.nativeAudio.play('error').then(() => {
      }).catch((ex) => {
        console.log(ex);
      });
    } else {
      if (!scanned) {
        this.scanned.unshift(exist);
        this.nativeAudio.play('beep');
      } else {
        this.nativeAudio.play('error').then(() => {
        }).catch((ex) => {
          console.log(ex);
        });
      }
    }
    // this.ref.markForCheck();
  }

  onPress(device) {
    this.isDelete = false;
    let index = this.selected.indexOf(device);
    if (index === -1 && device.link && device.link.id) {
      this.isDelete = true;
      this.selected = [device];
      return;
    }
    if (index > -1) {
      this.selected.splice(index, 1);
    } else {
      this.selected = [device];
    }
  }

}
