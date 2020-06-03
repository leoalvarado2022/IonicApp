import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {StoreService} from '../../../shared/services/store/store.service';
import {DealsService} from '../services/deals/deals.service';

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

  constructor(private _storeService: StoreService,
              private _dealService: DealsService) {
    this.currentDate = moment().format('YYYY-MM-DD');
    this.originalDate = moment().format('YYYY-MM-DD');
  }

  ngOnInit() {

    this.deal = this._dealService.getDealLocal();
    this.listCenterCost = this.listCenterCosts(this.deal);
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
    const localData = this._storeService.getDeals();
    const costCenters = this._storeService.getCostCentersCustom();
    let list = localData.filter((res: any) => {
      return res.id === deal.id;
    });

    let response = [];
    for (const obj of list) {
      if (obj.id_costCenter !== null) {
        const exist = costCenters.find(value => value.id === obj.id_costCenter);
        if (exist && !response.find(value => value.id === exist.id)) {
          response.push(exist);
        }
      }
    }

    return response;
  }


}
