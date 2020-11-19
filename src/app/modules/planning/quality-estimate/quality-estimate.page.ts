import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ContractDetailService } from '../services/contract-detail/contract-detail.service';
import { CostCenter, QualityDetail, QualityEstimate } from '@primetec/primetec-angular';
import { ModalController } from '@ionic/angular';
import { QualityEstimateFormComponent } from './quality-estimate-form/quality-estimate-form.component';
import { HttpService } from '../../../shared/services/http/http.service';
import { LoaderService } from '../../../shared/services/loader/loader.service';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { Subscription } from 'rxjs';
import { NetworkService } from '../../../shared/services/network/network.service';
import { StoreService } from '../../../shared/services/store/store.service';
import { CaliberService } from '../services/caliber/caliber.service';

@Component({
  selector: 'app-quality-estimate',
  templateUrl: './quality-estimate.page.html',
  styleUrls: ['./quality-estimate.page.scss'],
})
export class QualityEstimatePage implements OnInit, OnDestroy {

  public filteredQualityEstimate: Array<QualityEstimate>;
  public costCenter: CostCenter;
  public isOnline: boolean;
  private qualityEstimate: Array<QualityEstimate>;
  private qualityEstimateDetail: Array<QualityDetail>;
  private currentUrl: string;
  private isOnline$: Subscription;
  private router$: Subscription;
  private store$: Subscription;
  private calibers: Array<any> = [];

  private firstLoad = true;

  constructor(
    private router: Router,
    private contractDetailService: ContractDetailService,
    private modalController: ModalController,
    private alertService: AlertService,
    private httpService: HttpService,
    private loaderService: LoaderService,
    private networkService: NetworkService,
    private storeService: StoreService,
    private caliberService: CaliberService
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

      }
    });
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
    this.qualityEstimate = this.storeService.getQualityEstimate();
    this.filteredQualityEstimate = this.storeService.getQualityEstimate();
    this.qualityEstimateDetail = this.storeService.getQualityEstimateDetail();

    const { username } = this.storeService.getUser();
    const { species } = this.costCenter;
    this.caliberService.getCaliberEquivalences(username, species).subscribe(success => {
      this.calibers = success["data"];
    }, error => {
      
    });
  }

  /**
   * openForm
   */
  public openForm = async (qualityEstimate: QualityEstimate = null) => {
    const modal = await this.modalController.create({
      component: QualityEstimateFormComponent,
      componentProps: {
        costCenter: this.costCenter,
        qualityEstimate,
        qualityEstimateDetail: qualityEstimate ? this.qualityEstimateDetail.filter(item => item.qualityEstimate === qualityEstimate.id) : [],
        isView: qualityEstimate !== null,
        previous: this.qualityEstimate.length > 0 ? this.qualityEstimate[0] : null,
        calibers: this.calibers
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
   * searchQuality
   * @param search
   */
  public searchQuality = (search: string) => {
    if (search) {
      this.filteredQualityEstimate = this.qualityEstimate.filter(item => {
        return (
          item.userName.toLowerCase().includes(search.toLowerCase()) ||
          item.qualityName.toLowerCase().includes(search.toLowerCase()) ||
          item.exportPercentage === parseInt(search, 10) ||
          this.cleanDate(item.registrationDate).toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredQualityEstimate = this.qualityEstimate;
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.filteredQualityEstimate = this.qualityEstimate;
  }

  /**
   * viewQuality
   * @param qualityEstimate
   */
  public viewQuality = async (qualityEstimate: QualityEstimate) => {
    await this.openForm(qualityEstimate);
  }

  /**
   * deleteQuality
   * @param qualityEstimate
   */
  public deleteQuality = async (qualityEstimate: QualityEstimate) => {
    const response = await this.alertService.confirmAlert('Desea borrar esta estimacion de calidad?');

    if (response) {
      const newQuality = Object.assign({}, qualityEstimate, { id: -qualityEstimate.id });
      delete this.costCenter.active;
      const data = {
        costCenter: this.costCenter,
        quality: newQuality
      };

      this.storeQuality(data);
    }
  }

  /**
   * reloadList
   */
  public reloadList = () => {
    this.loaderService.startLoader('Cargando estimaciones de calidad');
    this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString()).subscribe((success: any) => {
      this.storeService.setContractData(success.data);
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
    });
  }

  /**
   * getItemDetails
   * @param id
   */
  public getItemDetails = (id: number) => {
    return this.qualityEstimateDetail.filter(item => item.qualityEstimate === id);
  }

  /**
   * storeQuality
   * @param data
   */
  private storeQuality = (data: any) => {
    this.loaderService.startLoader('Borrando estimacion de calidad');
    this.contractDetailService.storeQuality(data).subscribe(success => {
      this.reloadList();
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
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
