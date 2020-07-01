import { Component, OnInit } from '@angular/core';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store/store.service';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { MachineryFormComponent } from '../machinery-form/machinery-form.component';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-machinery-list',
  templateUrl: './machinery-list.page.html',
  styleUrls: ['./machinery-list.page.scss'],
})
export class MachineryListPage implements OnInit {

  private machinery: Array<any> = [];
  public filteredMachinery: Array<any> = [];

  private costCenters: Array<any> = [];
  private labors: Array<any> = [];
  private units: Array<any> = [];
  private workers: Array<any> = [];

  constructor(
    private storageSyncService: StorageSyncService,
    private activatedRoute: ActivatedRoute,
    private storeService: StoreService,
    private modalController: ModalController,
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  /**
   * loadData
   */
  private loadData = () => {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const activeCompany = this.storeService.getActiveCompany();
    const date = moment().format('YYYY-MM-DD');

    const units = this.storeService.getUnits();

    Promise.all([
      this.storageSyncService.getMachineryByCostCenter(+id, activeCompany.user, date),
      this.storageSyncService.getNotMachineryTypeCostCenters(),
      this.storageSyncService.getLabors(),
      this.storageSyncService.getWorkers()
    ]).then( (data: Array<any>) => {
      this.machinery = data[0];
      this.filteredMachinery = data[0];

      this.costCenters = data[1];
      this.labors = data[2];
      this.units = units;
      this.workers = data[3];
    });
  }

  /**
   * reload
   */
  public reload = (event: any) => {
    this.loadData();
    event.target.complete();
  }

  /**
   * openForm
   */
  public openForm = async () => {
    const modal = await this.modalController.create({
      component: MachineryFormComponent,
      componentProps: {
        costCenters: this.costCenters,
        labors: this.labors,
        units: this.units,
        workers: this.workers
      },
      backdropDismiss: false,
      keyboardClose: false
    });
    return await modal.present();
  }

}
