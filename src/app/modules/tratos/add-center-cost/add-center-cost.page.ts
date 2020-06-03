import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {StoreService} from '../../../shared/services/store/store.service';
import {DealsService} from '../services/deals/deals.service';
import {StorageSyncService} from '../../../services/storage/storage-sync/storage-sync.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {TratosScannedPage} from '../tratos-scanned/tratos-scanned.page';

@Component({
  selector: 'app-add-center-cost',
  templateUrl: './add-center-cost.page.html',
  styleUrls: ['./add-center-cost.page.scss'],
})
export class AddCenterCostPage implements OnInit {

  // Form dates
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';
  public currentDate: any;
  public readonly originalDate: any;
  public listCenterCost: any;
  public deal: any;
  public centerForm: FormGroup;

  constructor(private _storeService: StoreService,
              private _storeSync: StorageSyncService,
              private _dealService: DealsService,
              private formBuilder: FormBuilder,
              private _modalController: ModalController) {
    this.currentDate = moment().format('YYYY-MM-DD');
    this.originalDate = moment().format('YYYY-MM-DD');
  }

  ngOnInit() {
    this.deal = this._dealService.getDealLocal();
    this.listCenterCost = this.listCenterCosts(this.deal);

    if (this.deal.count) {
      this.centerForm = this.formBuilder.group({
        deal: this.deal,
        center_cost_id: [14, Validators.required],
        unit_control_count: [1, Validators.required],
        currentDate: ['2020-06-03'],
        automatic: true
      });
    } else {
      this.centerForm = this.formBuilder.group({
        deal: this.deal,
        center_cost_id: ['', Validators.required],
        unit_control_count: [0],
        currentDate: ['', Validators.required],
        automatic: true
      });
    }

  }


  /**
   * subtractDayToDate
   */
  public subtractDayToDate = (): void => {
    if (this.currentDate && moment(this.originalDate).diff(this.currentDate, 'days') < 7) {
      this.currentDate = moment(this.currentDate).subtract(1, 'day').toISOString();
    }
  };

  /**
   * addDayToDate
   */
  public addDayToDate = (): void => {
    if (this.currentDate && moment(this.currentDate).isBefore(this.originalDate)) {
      this.currentDate = moment(this.currentDate).add(1, 'day').toISOString();
    }
  };

  listCenterCosts(deal) {
    let response = [];
    Promise.all([
      this._storeSync.getDeals(),
      this._storeSync.getCostCentersCustom()
    ]).then((data) => {

      let list = data[0].filter((res: any) => {
        return res.id === deal.id;
      });
      for (const obj of list) {
        if (obj.id_costCenter !== null) {
          const exist = data[1].find(value => value.id === obj.id_costCenter);
          if (exist && !response.find(value => value.id === exist.id)) {
            response.push(exist);
          }
        }
      }

    });

    return response;
  }

  async scanned() {
    const scanned = Object.assign({}, this.centerForm.value);
    scanned.currentDate = this.currentDate;
    scanned.center_cost = this.listCenterCost.find(value => value.id === scanned.center_cost_id);

    const modal = await this._modalController.create({
      component: TratosScannedPage,
      componentProps: {centerCost: scanned}
    });

    return await modal.present();
  }


}
