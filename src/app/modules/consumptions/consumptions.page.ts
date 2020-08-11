import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Machinery } from 'src/app/modules/machinery/machinery.interface';

@Component({
  selector: 'app-consumptions',
  templateUrl: './consumptions.page.html',
  styleUrls: ['./consumptions.page.scss'],
})
export class ConsumptionsPage implements OnInit {

  public filteredConsumptions: Array<any> = [];

  public isLoading = false;
  private firstLoad = true;

  // Dates
  public readonly originalDate: any;
  public currentDate: any;
  public showDate: any;
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';

  constructor() {
    this.currentDate = moment().format('YYYY-MM-DD');
    this.showDate = moment(this.currentDate).format(this.dateFormat);
    this.originalDate = moment().format('YYYY-MM-DD');
  }

  ngOnInit() {
    const test = {
      companyId: 1,
      costCenterCode: 'CC20',
      costCenterId: 10,
      costCenterName: 'arandanos',
      creatorId: 48,
      date: '2020-08-06T00:00:00.000Z',
      id: 134,
      implementCostCenterId: null,
      laborCode: '002',
      laborId: 2,
      laborName: 'Cosechando',
      laborUnitId: 2,
      machineryCostCenterCode: 'cc99',
      machineryCostCenterId: 16,
      machineryCostCenterName: 'camioneta',
      machineryUnitCode: 'KM',
      machineryUnitId: 12,
      machineryUnitName: 'Kilometros',
      performance: 4,
      quantity: 1,
      useId: 47,
      workerId: 11,
      workerName: 'Bravo Fraure Fernando'
    };

    this.filteredConsumptions.push(test);

    this.isLoading = false;
  }

  /**
   * reload
   */
  public reload = (event: any) => {
    event.target.complete();
  }

}
