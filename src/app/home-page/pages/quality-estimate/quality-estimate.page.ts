import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ContractDetailService} from '../../../shared/services/contract-detail/contract-detail.service';
import {CostCenter, QualityDetail, QualityEstimate} from '@primetec/primetec-angular';
import {ModalController} from '@ionic/angular';
import {QualityEstimateFormComponent} from './quality-estimate-form/quality-estimate-form.component';
import {HttpService} from '../../../shared/services/http/http.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {AlertService} from '../../../shared/services/alert/alert.service';
import {Subscription} from 'rxjs';
import {NetworkService} from '../../../shared/services/network/network.service';

@Component({
  selector: 'app-quality-estimate',
  templateUrl: './quality-estimate.page.html',
  styleUrls: ['./quality-estimate.page.scss'],
})
export class QualityEstimatePage implements OnInit, OnDestroy {

  public filteredQualityEstimate: Array<QualityEstimate>;
  private qualityEstimate: Array<QualityEstimate>;
  private qualityEstimateDetail: Array<QualityDetail>;
  public costCenter: CostCenter;
  private currentUrl: string;
  public isOnline: boolean;

  private isOnline$: Subscription;
  private router$: Subscription;
  private costCenter$: Subscription;
  private qualityEstimate$: Subscription;
  private qualityEstimateDetail$: Subscription;

  constructor(
    private router: Router,
    private contractDetailService: ContractDetailService,
    private modalController: ModalController,
    private alertService: AlertService,
    private httpService: HttpService,
    private loaderService: LoaderService,
    private networkService: NetworkService
  ) {
    this.isOnline$ = this.networkService.getNetworkStatus().subscribe(status => {
      this.isOnline = status;
    });
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

    this.qualityEstimate$ = this.contractDetailService.getQualityEstimate().subscribe(value => {
      this.qualityEstimate = [...value];
      this.filteredQualityEstimate = [...value];
    });

    this.qualityEstimateDetail$ = this.contractDetailService.getQualityEstimateDetail().subscribe(value => {
      this.qualityEstimateDetail = [...value];
    });
  }

  ngOnDestroy(): void {
    this.isOnline$.unsubscribe();
    this.router$.unsubscribe();
    this.costCenter$.unsubscribe();
    this.qualityEstimate$.unsubscribe();
    this.qualityEstimateDetail$.unsubscribe();
  }

  /**
   * checkButton
   */
  public checkButton = () => {
    return this.currentUrl === '/home-page/quality-estimate';
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
        previous: this.qualityEstimate.length > 0 ? this.qualityEstimate[0] : null
      },
      backdropDismiss: false,
      keyboardClose: false,
      cssClass: 'full-screen-modal'
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.reloadList().then(success => {
          // TERMINO AQUI
        });
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
          item.exportPercentage === parseInt(search, 10)
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
      const newQuality = Object.assign({}, qualityEstimate, {id: -qualityEstimate.id});
      delete this.costCenter.active;
      const data = {
        costCenter: this.costCenter,
        quality: newQuality,
        calibers: this.qualityEstimateDetail
      };
      await this.storeQuality(data);
      await this.reloadList();
    }
  }

  /**
   * storeQuality
   * @param data
   */
  private storeQuality = (data: any) => {
    return new Promise((resolve, reject) => {
      this.loaderService.startLoader('Borrando estimacion de calidad');
      this.contractDetailService.storeQuality(data).subscribe(success => {
        this.loaderService.stopLoader();
        resolve(true);
      }, error => {
        this.loaderService.stopLoader();
        this.httpService.errorHandler(error);
        resolve(false);
      });
    });
  }

  /**
   * reloadList
   */
  public reloadList = () => {
    return new Promise((resolve, reject) => {
      this.loaderService.startLoader('Cargando estimaciones de calidad');
      this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString()).subscribe(success => {
        this.loaderService.stopLoader();
        resolve(true);
      }, error => {
        this.loaderService.stopLoader();
        resolve(false);
      });
    });
  }

  /**
   * getItemDetails
   * @param id
   */
  public getItemDetails = (id: number) => {
    return this.qualityEstimateDetail.filter(item => item.qualityEstimate === id);
  }
}
