import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {DealsService} from '../services/deals/deals.service';
import {StorageSyncService} from '../../../services/storage/storage-sync/storage-sync.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

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
  public showDate: any;

  public readonly originalDate: any;
  public listCenterCost: any;
  public deal: any;
  public centerForm: FormGroup;

  constructor(
    private _storeSync: StorageSyncService,
    private _dealService: DealsService,
    private formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.currentDate = moment().format('YYYY-MM-DD');
    this.showDate = moment(this.currentDate).format(this.dateFormat);
    this.originalDate = moment().format('YYYY-MM-DD');
  }

  ngOnInit() {
    this.deal = this._dealService.getDealLocal();
    //this.listCenterCost = this.listCenterCosts(this.deal);
    this._storeSync.getCostCentersCustomByDeal(this.deal).then( data => this.listCenterCost = data);

    this.centerForm = this.formBuilder.group({
      deal: this.deal,
      center_cost_id: ['', Validators.required],
      unit_control_count: [ this.deal.count ? '': 0, Validators.required],
      currentDate: [this.currentDate, Validators.required],
      automatic: true
    });
  }


  /**
   * subtractDayToDate
   */
  public subtractDayToDate = (): void => {
    if (this.currentDate && moment(this.originalDate).diff(this.currentDate, 'days') < 7) {
      this.currentDate = moment(this.currentDate).subtract(1, 'day').toISOString();
      this.showDate = moment(this.currentDate).format(this.dateFormat);
      this.centerForm.get('currentDate').patchValue(this.currentDate);
    }
  };

  /**
   * addDayToDate
   */
  public addDayToDate = (): void => {
    if (this.currentDate && moment(this.currentDate).isBefore(this.originalDate)) {
      this.currentDate = moment(this.currentDate).add(1, 'day').toISOString();
      this.showDate = moment(this.currentDate).format(this.dateFormat);
      this.centerForm.get('currentDate').patchValue(this.currentDate);
    }
  };

  /**
   * @description logica para enviar a escaneo
   */
  sendScanned() {
    const scanned = Object.assign({}, this.centerForm.value);
    scanned.currentDate = this.currentDate;
    scanned.center_cost = this.listCenterCost.find(value => value.id === scanned.center_cost_id);

    this._dealService.setDataScanned(scanned);
    this._router.navigate(['home-page/tarja_tratos/deal-scanned']);
  }

}
