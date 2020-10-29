import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StorageSyncService} from '../../../services/storage/storage-sync/storage-sync.service';
import {PosService} from '../services/pos.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-delivery-config',
  templateUrl: './delivery-config.page.html',
  styleUrls: ['./delivery-config.page.scss'],
})
export class DeliveryConfigPage implements OnInit, OnDestroy {

  public configForm: FormGroup;
  public configDelivery: any;
  public configActiveDelivery: any;


  constructor(
    private formBuilder: FormBuilder,
    private storageSyncService: StorageSyncService,
    private detectChangeRef: ChangeDetectorRef,
    public _posService: PosService
  ) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.configForm = this.formBuilder.group({
      configId: ['', Validators.required],
    });

    this.loadData();
  }

  /**
   * @description load data
   */
  loadData() {
    this.storageSyncService.getConfigDelivery().then(data => {
      this.configDelivery = data;
      this.configActiveDelivery = this.storageSyncService.getActiveConfigDelivery();
      if (this.configActiveDelivery) {
        this.configForm.patchValue({
          configId: this.configActiveDelivery.id
        });
      } else {
        this._posService.connection = false;
      }
    });

  }

  /**
   * @description cambio de select
   * @param event
   */
  changeLocal(event: any) {
    this.configForm.patchValue({
      configId: event.detail.value
    });
  }

  /**
   * @description actualizar datos
   */
  submitForm() {
    const data = Object.assign({}, this.configForm.value);
    const config = this.configDelivery.find(value => value.id === data.configId);

    this.storageSyncService.setActiveConfigDelivery(config);
    this.configActiveDelivery = config;
  }

  connectionSync() {
    this._posService.loginToSync();
  }

}
