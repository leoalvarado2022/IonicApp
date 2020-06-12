import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidateRut} from '@primetec/primetec-angular';
import {StoreService} from '../../../shared/services/store/store.service';
import {DeviceSyncService} from '../../../services/storage/device-sync/device-sync.service';
import {DealsService} from '../services/deals/deals.service';

@Component({
  selector: 'app-associate-work',
  templateUrl: './add-trato.page.html',
  styleUrls: ['./add-trato.page.scss'],
})
export class AddTratoPage implements OnInit {

  @Input() deals: any;
  public activeForm: FormGroup;

  constructor(public modalController: ModalController,
              private formBuilder: FormBuilder,
              private _storeService: StoreService,
              private _dealService: DealsService) {
  }


  ngOnInit() {
    // console.log(this.deals, 'deal modal');
    this.activeForm = this.formBuilder.group({
      id: ['', Validators.required],
      option: ['', Validators.required],
      method: ['', Validators.required],
      automatic: [true, Validators.required],
      name_labor: ['', Validators.required],
      unit_control: ['', Validators.required],
    });
  }

  /**
   * closeModal
   */
  public closeWork = async (data: any = null) => {
    await this.modalController.dismiss({
      data
    });
  };


  /**
   * @description agregar trato
   */
  async onPress() {
    await this.closeWork();
  }


  /**
   * onSubmit
   */
  async onSubmit() {
    let data = Object.assign({}, this.activeForm.value);
    const deal = this.deals.length ? this.deals.find(value => value.id === data.id) : [];

    // if exists deal , the change data
    if (deal) {
      data = Object.assign(deal, this.activeForm.value);

      switch (data.option) {
        case '0' :
          data.count = false;
          data.weight = true;
          data.performance = false;
          break;
        case '1':
          data.count = true;
          data.weight = false;
          data.performance = false;
          break;
        case '2':
          data.count = false;
          data.weight = false;
          data.performance = true;
          break;
      }

      if (data.method === 'nfc')
        data.nfc = true;

      data.active = true;
    }

    data.user = this._storeService.getUser();

    await this._dealService.setDealsTemp(data);
    await this.closeWork(data);
  }

  /**
   * @description select change value
   * @param event
   */
  public change(event: any) {

    const deal = this.deals.find(data => data.id === event.target.value);

    if (deal) {
      this.activeForm.patchValue({
        name_labor: deal.name_labor,
        unit_control: deal.unit_control
      });
    }
  }
}
