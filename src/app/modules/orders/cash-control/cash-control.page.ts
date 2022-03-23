import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DeliveryService } from '../services/delivery.service';
import {StoreService} from '../../../shared/services/store/store.service';
import { HttpService } from '../../../shared/services/http/http.service';

@Component({
  selector: 'app-cash-control',
  templateUrl: './cash-control.page.html',
  styleUrls: ['./cash-control.page.scss'],
})
export class CashControlPage implements OnInit {

  // Dates
  public readonly originalDate: any;
  public currentDate: any;
  public showDate: any;
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';
  public resume: Array<any> = [];

  constructor(public _deliveryService: DeliveryService,
              private storeService: StoreService,
              private httpService: HttpService) { 
    this.currentDate = moment().format('YYYY-MM-DD');
    this.showDate = moment(this.currentDate).format(this.dateFormat);
    this.originalDate = moment().format('YYYY-MM-DD');
  }

  ngOnInit() {
    this.getDailyResume();
  }

  public searchByDate = () => {
    this.getDailyResume();
  }

  public getDailyResume = () => {
    const user = this.storeService.getActiveCompany();
    const data = {
      fecha_comercial: this.currentDate,
      user: user.user,
      company_id: user.id
    };

    this._deliveryService.getDailyResume(data).subscribe( (success: any) => {
      const dataResume = success.data.resume;
      if(dataResume && dataResume.length) {
        this.resume = [...dataResume];
      }
    }, error => {
      this.httpService.errorHandler(error);
    })
  }

  public reload = (event: any): void => {
    event.target.complete();
  }

  /**
   * addDayToDate
   */
  public addDayToDate = (): void => {
    if (this.currentDate && moment(this.currentDate).isBefore(this.originalDate)) {
      this.currentDate = moment(this.currentDate).add(1, 'day').format('YYYY-MM-DD');
      this.showDate = moment(this.currentDate).format(this.dateFormat);
    }
  }

  /**
   * subtractDayToDate
   */
  public subtractDayToDate = (): void => {
    if (this.currentDate && moment(this.originalDate).diff(this.currentDate, 'days') < 7) {
      this.currentDate = moment(this.currentDate).subtract(1, 'day').format('YYYY-MM-DD');
      this.showDate = moment(this.currentDate).format(this.dateFormat);
    }
  }

}
