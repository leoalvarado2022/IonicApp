import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ContractDetailService} from '../../../shared/services/contract-detail/contract-detail.service';
import {CostCenter, QualityDetail, QualityEstimate} from '@primetec/primetec-angular';
import {AlertController, ModalController} from '@ionic/angular';
import {QualityEstimateFormComponent} from './quality-estimate-form/quality-estimate-form.component';
import {HttpService} from '../../../shared/services/http/http.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';

@Component({
  selector: 'app-quality-estimate',
  templateUrl: './quality-estimate.page.html',
  styleUrls: ['./quality-estimate.page.scss'],
})
export class QualityEstimatePage implements OnInit {

  public filteredQualityEstimate: Array<QualityEstimate>;
  private qualityEstimate: Array<QualityEstimate>;
  private qualityEstimateDetail: Array<QualityDetail>;
  private costCenter: CostCenter;
  private currentUrl: string;

  constructor(
    private router: Router,
    private contractDetailService: ContractDetailService,
    private modalController: ModalController,
    private alertController: AlertController,
    private httpService: HttpService,
    private loaderService: LoaderService
  ) {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentUrl = route.url;
      }
    });
  }

  ngOnInit() {
    this.contractDetailService.getCostCenter().subscribe(value => {
      this.costCenter = value;
    });

    this.contractDetailService.getQualityEstimate().subscribe(value => {
      this.qualityEstimate = [...value];
      this.filteredQualityEstimate = [...value];
    });

    this.contractDetailService.getQualityEstimateDetail().subscribe(value => {
      this.qualityEstimateDetail = [...value];
    });
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
        qualityEstimateDetail: qualityEstimate ? this.qualityEstimateDetail.filter(item => item.qualityEstimate === qualityEstimate.id) : []
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
    const alert = await this.alertController.create({
      message: 'Desea borrar esta estimacion de calidad?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: async () => {
            const newQuality = Object.assign({}, qualityEstimate, {id: -qualityEstimate.id});
            delete this.costCenter.active;
            const data = {
              costCenter: this.costCenter,
              quality: newQuality,
              calibers: this.qualityEstimateDetail
            };
            await this.storeQuality(data);
            await this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString());
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * storeQuality
   * @param data
   */
  private storeQuality = async (data: any) => {
    await this.loaderService.startLoader('Borrando calidad');
    this.contractDetailService.storeQuality(data).subscribe(success => {
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }
}
