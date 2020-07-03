import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store/store.service';
import * as moment from 'moment';
import { ModalController, IonItemSliding } from '@ionic/angular';
import { MachineryFormComponent } from '../machinery-form/machinery-form.component';
import { Company } from '@primetec/primetec-angular';
import { MachineryService } from '../services/machinery.service';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { Subscription } from 'rxjs';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-machinery-list',
  templateUrl: './machinery-list.page.html',
  styleUrls: ['./machinery-list.page.scss'],
})
export class MachineryListPage implements OnInit, OnDestroy {

  private machinery: Array<any> = [];
  private machineryToRecord: Array<any> = [];
  public filteredMachinery: Array<any> = [];

  private costCenters: Array<any> = [];
  private labors: Array<any> = [];
  private units: Array<any> = [];
  private workers: Array<any> = [];

  private firstLoad = true;
  private activeCompany: Company;
  private stepper$: Subscription;

  constructor(
    private storageSyncService: StorageSyncService,
    private activatedRoute: ActivatedRoute,
    private storeService: StoreService,
    private modalController: ModalController,
    private machineryService: MachineryService,
    private httpService: HttpService,
    private stepperService: StepperService,
    private alertService: AlertService
  ) {

  }

  ngOnInit() {
    this.stepper$ = this.stepperService.getStepper().subscribe((steps: Array<any>) => {
      if (steps.length === 0  && !this.firstLoad) {
        this.loadData();
      }
    });

    this.loadData();
  }

  ngOnDestroy(): void {
    this.stepper$.unsubscribe();
  }

  /**
   * loadData
   */
  private loadData = () => {
    this.firstLoad = false;

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.activeCompany = this.storeService.getActiveCompany();
    const user = this.storeService.getUser();
    const date = moment().format('YYYY-MM-DD');
    const units = this.storeService.getUnits();

    Promise.all([
      this.storageSyncService.getMachineryByCostCenter(+id, this.activeCompany.user, date, this.activeCompany.id),
      this.storageSyncService.getNotMachineryTypeCostCenters(),
      this.storageSyncService.getLabors(),
      this.machineryService.getMachineryToRecord(),
    ]).then( (data: Array<any>) => {

      this.machinery = data[0];
      this.costCenters = data[1];
      this.labors = data[2];
      this.units = units;
      this.machineryToRecord = data[3];

      this.filteredMachinery = [ ...this.machineryToRecord, ...this.machinery];
    });

    this.machineryService.getWorkers(user).subscribe(success => {
      this.workers = success['data'];
    }, error => {
      this.httpService.errorHandler(error);
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
   * searchMachinery
   * @param search
   */
  public searchMachinery = (search: string): void => {
    if (search) {
      this.filteredMachinery = [ ...this.machineryToRecord, ...this.machinery].filter(item => {
        return (
          item.costCenterCode.toLowerCase().includes(search.toLowerCase()) ||
          item.costCenterName.toLowerCase().includes(search.toLowerCase()) ||
          item.laborName.toLowerCase().includes(search.toLowerCase()) ||
          item.unitName.toLowerCase().includes(search.toLowerCase()) ||
          item.workerName.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredMachinery = [ ...this.machineryToRecord, ...this.machinery];
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = (): void => {
    this.filteredMachinery = [ ...this.machineryToRecord, ...this.machinery];
  }

  /**
   * openForm
   */
  public openForm = async () => {
    const modal = await this.modalController.create({
      component: MachineryFormComponent,
      componentProps: {
        companyId: this.activeCompany.id,
        costCenters: this.costCenters,
        machineryCostCenterId: +this.activatedRoute.snapshot.paramMap.get('id'),
        labors: this.labors,
        units: this.units,
        workers: this.workers
      },
      backdropDismiss: false,
      keyboardClose: false
    });

    modal.onDidDismiss().then(() => {
      this.loadData();
    });

    return await modal.present();
  }

  /**
   * editMachinery
   * @param machinery
   * @param slide
   */
  public editMachinery = async (machinery: any, slide: IonItemSliding) => {
    const modal = await this.modalController.create({
      component: MachineryFormComponent,
      componentProps: {
        companyId: this.activeCompany.id,
        costCenters: this.costCenters,
        machineryCostCenterId: +this.activatedRoute.snapshot.paramMap.get('id'),
        labors: this.labors,
        units: this.units,
        workers: this.workers,
        editMachinery: machinery
      },
      backdropDismiss: false,
      keyboardClose: false
    });

    modal.onDidDismiss().then(() => {
      slide.close();
      this.loadData();
    });

    return await modal.present();
  }

  /**
   * deleteMachinery
   * @param machineryTempId
   * @param slide
   */
  public deleteMachinery = async (machineryTempId: number, slide: IonItemSliding) => {
    const sayYes = await this.alertService.confirmAlert('Confirmar borrar esta maquinaria?');

    if(sayYes){
      await this.machineryService.deleteMachinery(machineryTempId);
      slide.close();
      this.loadData();
    }
  }

}
