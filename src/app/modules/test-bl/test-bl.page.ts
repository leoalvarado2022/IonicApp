import { Component, OnInit, OnDestroy } from '@angular/core';
import { BluetoothService } from '../../services/bluetooth/bluetooth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BluetoothDevice } from 'src/app/services/bluetooth/bluetooth-device.interface';

@Component({
  selector: 'app-test-bl',
  templateUrl: './test-bl.page.html',
  styleUrls: ['./test-bl.page.scss'],
})
export class TestBlPage implements OnInit, OnDestroy {

  
  public isBluetoothEnabled: boolean;
  public isDeviceConnected: boolean;
  public isSearching: boolean;
  public lastWeight: number; 

  private unsubscriber = new Subject();    

  constructor(private bluetoothService: BluetoothService) {
    this.bluetoothService.getBluetoothStatus().pipe(
      takeUntil(this.unsubscriber)
    ).subscribe( (status: boolean) => {
      this.isBluetoothEnabled = status;
    });

    this.bluetoothService.getConnectionStatus().pipe(
      takeUntil(this.unsubscriber)
    ).subscribe( (status: boolean) => {
      this.isDeviceConnected = status;
    });

    this.bluetoothService.getSearchingStatus().pipe(
      takeUntil(this.unsubscriber)
    ).subscribe( (status: boolean) => {
      this.isSearching = status;
    });

    this.bluetoothService.getLastWeight().pipe(
      takeUntil(this.unsubscriber)
    ).subscribe( (weight: number) => {
      this.lastWeight = weight;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy(){
    this.unsubscriber.complete();
  }

  /**
   * getPairedDevices
   */
  public getPairedDevices = () => {
    return this.bluetoothService.getPairedDevices();
  }

  /**
   * getAvailableDevices
   */
  public getAvailableDevices = () => {
    return this.bluetoothService.getAvailableDevices();
  }

  /**
   * scanDevices
   */
  public scanDevices = () => {
    return this.bluetoothService.scanDevices();
  }

  /**
   * connectDevice
   * @param device 
   */
  public connectDevice = (device: BluetoothDevice) => {
    this.bluetoothService.connectDevice(device);
  }

  /**
   * disconnectDevice
   * @param device 
   */
  public disconnectDevice = (device: BluetoothDevice) => {
    this.bluetoothService.disconnectDevice();    
  }

  /**
   * readData
   */
  public readData = () => {
    this.bluetoothService.getDeviceData();
  }  

}
