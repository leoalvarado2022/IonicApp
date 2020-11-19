import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HarvestEstimateFormComponent } from './harvest-estimate-form/harvest-estimate-form.component';
import { CostCenter, Unit } from '@primetec/primetec-angular';
import { ContractDetailService } from '../services/contract-detail/contract-detail.service';
import { HttpService } from '../../../shared/services/http/http.service';
import { LoaderService } from '../../../shared/services/loader/loader.service';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { Subscription } from 'rxjs';
import { NetworkService } from '../../../shared/services/network/network.service';
import { StoreService } from '../../../shared/services/store/store.service';
import { HarvestEstimate } from './harvest-estimate.interface';

@Component({
  selector: 'app-harvest-estimate',
  templateUrl: './harvest-estimate.page.html',
  styleUrls: ['./harvest-estimate.page.scss'],
})
export class HarvestEstimatePage implements OnInit, OnDestroy {

  public isOnline: boolean;
  public costCenter: CostCenter;
  public filteredHarvestEstimate: Array<HarvestEstimate> = [];
  private harvestEstimate: Array<HarvestEstimate> = [];
  private currentUrl: string;
  private isOnline$: Subscription;
  private router$: Subscription;
  private store$: Subscription;
  public units: Array<Unit> = [];

  private firstLoad = true;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private contractDetailService: ContractDetailService,
    private alertService: AlertService,
    private httpService: HttpService,
    private loaderService: LoaderService,
    private networkService: NetworkService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.router$ = this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentUrl = route.url;
      }
    });

    this.isOnline$ = this.networkService.getNetworkStatus().subscribe(status => {
      this.isOnline = status;
    });

    this.store$ = this.storeService.stateChanged.subscribe(data => {
      if (!this.firstLoad) {
        this.loadData();
      }
    });

    this.firstLoad = false;
  }

  ngOnDestroy(): void {
    this.isOnline$.unsubscribe();
    this.router$.unsubscribe();
    this.store$.unsubscribe();
  }

  ionViewDidEnter() {
    this.loadData();
  }

  /**
   * loadData
   */
  private loadData = () => {
    this.firstLoad = false;

    this.costCenter = this.storeService.getCostCenter();
    this.harvestEstimate = this.storeService.getHarvestEstimate();
    this.filteredHarvestEstimate = this.storeService.getHarvestEstimate();
    this.units = this.storeService.getUnits();
  }  

  /**
   * newHarvestEstimate
   */
  public newHarvestEstimate = async (harvestEstimate: HarvestEstimate = null) => {
    const modal = await this.modalController.create({
      component: HarvestEstimateFormComponent,
      componentProps: {
        costCenter: this.costCenter,
        harvestEstimate,
        isView: harvestEstimate !== null
      },
      backdropDismiss: false,
      keyboardClose: false,
      cssClass: 'full-screen-modal'
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.reloadList();
      }
    });

    return await modal.present();
  }

  /**
   * duplicateHarvestEstimate
   * @param harvestEstimate 
   */
  public duplicateHarvestEstimate = async (harvestEstimate: HarvestEstimate) => {
    const modal = await this.modalController.create({
      component: HarvestEstimateFormComponent,
      componentProps: {
        costCenter: this.costCenter,
        isView: false,
        previous: harvestEstimate
      },
      backdropDismiss: false,
      keyboardClose: false,
      cssClass: 'full-screen-modal'
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.reloadList();
      }
    });

    return await modal.present();
  }

  /**
   * searchHarvest
   * @param search
   */
  public searchHarvest = (search: string) => {
    if (search) {
      this.filteredHarvestEstimate = this.harvestEstimate.filter(item => {
        return (
          item.userName.toLowerCase().includes(search.toLowerCase()) ||
          item.quantity === parseInt(search, 10) ||
          this.showUnitCode(item.unit).toLowerCase().includes(search.toLowerCase()) ||
          this.cleanDate(item.startDate).toLowerCase().includes(search.toLowerCase()) ||
          this.cleanDate(item.registrationDate).toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredHarvestEstimate = this.harvestEstimate;
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.filteredHarvestEstimate = this.harvestEstimate;
  }

  /**
   * harvestSelected
   * @param item
   */
  public viewHarvest = async (harvestEstimate: HarvestEstimate) => {
    await this.newHarvestEstimate(harvestEstimate);
  }

  /**
   * deleteHarvest
   * @param harvestEstimate
   */
  public deleteHarvest = async (harvestEstimate: HarvestEstimate) => {
    const respuesta = await this.alertService.confirmAlert('Desea borrar esta estimacion de cosecha?');

    if (respuesta) {
      const newHarvest = Object.assign({}, harvestEstimate, {
        id: -harvestEstimate.id,
        workHolidays: harvestEstimate ? 1 : 0
      });
      delete this.costCenter.active;
      const data = {
        costCenter: this.costCenter,
        harvestEstimate: newHarvest
      };

      this.storeEstimation(data);
    }
  }

  /**
   * reloadList
   */
  public reloadList = () => {
    this.loaderService.startLoader();
    this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString()).subscribe((success: any) => {
      this.storeService.setContractData(success.data);
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

  /**
   * storeEstimation
   * @param data
   */
  private storeEstimation = (data: any) => {
    this.loaderService.startLoader('Borrando estimacion de cosecha');
    this.contractDetailService.storeHarvest(data).subscribe(success => {
      this.reloadList();
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

  /**
   * processSelectedHarvest
   * @param harvestEstimate 
   */
  public processSelectedHarvest = (harvestEstimate: HarvestEstimate) => {
    if (harvestEstimate.active) {
      this.duplicateHarvestEstimate(harvestEstimate);
    } else {
      this.viewHarvest(harvestEstimate);
    }
  }

  /**
   * showUnitCode
   * @param unitId 
   */
  private showUnitCode = (unitId: number): string => {
    const find = this.units.find(item => item.id === unitId);
    return find ? find.code : '';
  }

  /**
   * cleanDate
   * @param date 
   */  
  private cleanDate = (date: string): string => {
    if (date.includes('T')) {
      return date.split('T')[0];
    }

    return date;
  }

}
