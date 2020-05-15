import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import * as moment from 'moment';

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

  constructor() {
    this.currentDate = moment().format('YYYY-MM-DD');
    this.originalDate = moment().format('YYYY-MM-DD')
  }

  ngOnInit() {

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


}
