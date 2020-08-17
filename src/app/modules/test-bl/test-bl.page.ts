import { Component, OnInit } from '@angular/core';
import { timer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

interface Device {
  id: string;
  class: number;
  address: string;    
  name?: string;
}

@Component({
  selector: 'app-test-bl',
  templateUrl: './test-bl.page.html',
  styleUrls: ['./test-bl.page.scss'],
})
export class TestBlPage implements OnInit {

  public isBluetoothEnabled: boolean;  
  public devicesList: Array<Device> = [];
  public isSearching = false;
  public isConnecting = false;
  public selectedDevice: Device;

  private unsubscriber = new Subject();
  
  constructor(private bluetoothSerial: BluetoothSerial) {
    /*
    this.bluetoothSerial.subscribe('\n').subscribe( data => {
      console.log('data subscribe', data);
    });
    */    

    this.bluetoothSerial.list().then( data => {
      console.log('list', data);
    }, error => {
      console.log('list error', error);
    })
  }

  ngOnInit() {    
    timer(0, 1000 * 30).pipe(
      takeUntil(this.unsubscriber)
    ).subscribe( () => {
      this.bluetoothSerial.isEnabled().then( success => {
        this.isBluetoothEnabled = success === 'OK';
      }, error => {
        this.isBluetoothEnabled = false;
      });
    });
  }

  ngOnDestroy(){
    this.unsubscriber.complete();
  }

  /**
   * scan
   */
  public scan = () => {    
    this.isSearching = true;
    this.devicesList = [];

    this.bluetoothSerial.discoverUnpaired().then( (data: Array<Device>) => {
      console.log('devices', data);

      this.devicesList = data;
      this.isSearching = false;
    }, error => {
      this.devicesList = [];
      this.isSearching = false;
    });
  }

  /**
   * connectDevice
   * @param device 
   */
  public connectDevice = (device: Device) => {
    this.isConnecting = true;
    this.bluetoothSerial.connect(device.address).subscribe(success => {
      this.selectedDevice = device;
      this.isConnecting = false;
      // MENSAJE CONECTADO
    }, error => {
      this.selectedDevice = null;
      this.isConnecting = false;
      // MENSAJE ERROR
    });
  }

  public leerData(){
    this.bluetoothSerial.read().then( data => {
      console.log('readUntil', data);
      console.log('0', data[0]);
    }, error => {
      console.log('error', error);
    });
  }

}
