import { Component, OnInit } from '@angular/core';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetailFormComponent } from '../forms/detail-form/detail-form.component'
import { CreateMeasuringComponent } from '../forms/create-measuring/create-measuring.component'
import * as moment from 'moment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  // Dates
  public readonly originalDate: any;
  public currentDate: any;
  public showDate: any;
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';

  public isLoading = false;
  listData: Array<any>;
  filteredData: Array<any> = [];
  searchData: Array<any> = [];
  measuringData: Array<any> = [];
  constructor(
    private storageSyncService: StorageSyncService, 
    private modalController: ModalController,
    public router: Router) 
  {
    this.currentDate = moment().format('YYYY-MM-DD');
    this.showDate = moment(this.currentDate).format(this.dateFormat);
    this.originalDate = moment().format('YYYY-MM-DD');
  }

  ngOnInit() {

    this.loadData();
  }

  loadData() {

    this.isLoading = true;
    Promise.all([
      this.storageSyncService.getListMeasuring()
    ]).then( data => {

      //TODO
      // devolver solo por la fecha seleccionada
      // agrupar por centro de costo, fecha

      this.listData = [...data[0]];
      this.filterByDate(this.showDate);
      this.isLoading = false;
    });

  }

  public filterByDate(_date) {
    this.filteredData = [];
    this.filteredData = this.listData.filter( item => {
      const _d = item.register_date.split(" ")[0];
      return (_d == _date);
    });
    this.groupArray();
  }

  public groupArray() {
    this.measuringData = [];
    const grouped = {};
    const filter = ["cost_center_id","measure"];
    this.filteredData.forEach( (value, index) => {
      filter.reduce( (obj,pos,k_index) => {
        obj[value[pos]] = obj[value[pos]] || (k_index + 1 === filter.length ? [] : {});
        return obj[value[pos]];
      },grouped).push(value);
    })
    const _grouped = JSON.parse(JSON.stringify(grouped));
    
    let i = 0;
    for(let g in _grouped) {
      this.measuringData[i] = [];
      for(let _d in _grouped[g]){
        this.measuringData[i] = {
          "medicion":_grouped[g][_d][0].measure,
          "cantidad":_grouped[g][_d].length,
          "centro_costo":_grouped[g][_d][0].cost_center_code,
          "id_centro_costo":_grouped[g][_d][0].cost_center_id,
          "id_par_medicion":_grouped[g][_d][0].pair_measure_id,
          "detalle": _grouped[g][_d]
        };
        i++;
      }
    };
    
    this.searchData = [...this.measuringData];

  }

  /**
   * addDayToDate
   */
  public addDayToDate = (): void => {
    if (this.currentDate && moment(this.currentDate).isBefore(this.originalDate)) {
      this.currentDate = moment(this.currentDate).add(1, 'day').format('YYYY-MM-DD');
      this.showDate = moment(this.currentDate).format(this.dateFormat);
      this.filterByDate(this.showDate);
    }
  }

  /**
   * subtractDayToDate
   */
  public subtractDayToDate = (): void => {
    if (this.currentDate && moment(this.originalDate).diff(this.currentDate, 'days') < 7) {
      this.currentDate = moment(this.currentDate).subtract(1, 'day').format('YYYY-MM-DD');
      this.showDate = moment(this.currentDate).format(this.dateFormat);
      this.filterByDate(this.showDate);
    }
  }

  async openModal(measuringData) {
    const modal = await this.modalController.create({
      component: DetailFormComponent,
      componentProps: {
        data: measuringData
        
      },
      backdropDismiss: false,
      keyboardClose: false
    });

    return await modal.present();
  }

  async openCreateModal() {
    const modal = await this.modalController.create({
      component: CreateMeasuringComponent,
      componentProps: {},
      backdropDismiss: false,
      keyboardClose: false
    });

    return await modal.present();
  }


  cancelSearch() {
    this.measuringData = [...this.searchData];
  }

  searchMeasuring(search: string) {
    if(search && search.length > 0) {
      search = search.toLowerCase();
      this.measuringData = this.searchData.filter( item => {
        return (
          item.medicion.toLowerCase().includes(search) ||
          item.centro_costo.toLowerCase().includes(search)
        );
      })
    }else {
      this.cancelSearch();
    }
  }

}
