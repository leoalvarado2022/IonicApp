import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {HarvestEstimateFormComponent} from './harvest-estimate-form/harvest-estimate-form.component';
import {CostCenter, HarvestEstimate} from '@primetec/primetec-angular';
import {ContractDetailService} from '../../../shared/services/contract-detail/contract-detail.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {AlertService} from "../../../shared/services/alert/alert.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-harvest-estimate',
  templateUrl: './harvest-estimate.page.html',
  styleUrls: ['./harvest-estimate.page.scss'],
})
export class HarvestEstimatePage implements OnInit, OnDestroy {

  private harvestEstimate: Array<HarvestEstimate>;
  public filteredHarvestEstimate: Array<HarvestEstimate>;
  public costCenter: CostCenter;
  private currentUrl: string;
  private router$: Subscription;
  private costCenter$: Subscription;
  private harvestEstimate$: Subscription;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private contractDetailService: ContractDetailService,
    private alertService: AlertService,
    private httpService: HttpService,
    private loaderService: LoaderService
  ) {

  }

  ngOnInit() {
    this.router$ = this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentUrl = route.url;
      }
    });

    this.costCenter$ = this.contractDetailService.getCostCenter().subscribe(value => {
      this.costCenter = value;
    });

    this.harvestEstimate$ = this.contractDetailService.getHarvestEstimate().subscribe(value => {
      this.harvestEstimate = value;
      this.filteredHarvestEstimate = value;
    });
  }

  ngOnDestroy(): void {
    this.router$.unsubscribe();
    this.costCenter$.unsubscribe();
    this.harvestEstimate$.unsubscribe();
  }

  /**
   * checkButton
   */
  public checkButton = () => {
    return this.currentUrl === '/home-page/harvest-estimate';
  }

  /**
   * openForm
   */
  public openForm = async (harvestEstimate: HarvestEstimate = null) => {
    const modal = await this.modalController.create({
      component: HarvestEstimateFormComponent,
      componentProps: {
        costCenter: this.costCenter,
        harvestEstimate
      },
      backdropDismiss: false,
      keyboardClose: false,
      cssClass: 'full-screen-modal'
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString());
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
          item.quantity === parseInt(search, 10)
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
    await this.openForm(harvestEstimate);
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
      await this.storeEstimation(data);
      setTimeout(() => {
        this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString());
      }, 2000);
    }
  }

  /**
   * storeEstimation
   * @param data
   */
  private storeEstimation = async (data: any) => {
    await this.loaderService.startLoader('Borrando estimacion de calidad');
    this.contractDetailService.storeHarvest(data).subscribe(success => {
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

}
