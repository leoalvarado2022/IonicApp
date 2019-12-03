import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ContractDetailService} from '../../../shared/services/contract-detail/contract-detail.service';
import {CostCenter, QualityDetail, QualityEstimate} from '@primetec/primetec-angular';
import {ModalController} from '@ionic/angular';
import {QualityEstimateFormComponent} from './quality-estimate-form/quality-estimate-form.component';

@Component({
  selector: 'app-quality-estimate',
  templateUrl: './quality-estimate.page.html',
  styleUrls: ['./quality-estimate.page.scss'],
})
export class QualityEstimatePage implements OnInit {

  private qualityEstimate: Array<QualityEstimate>;
  public filteredQualityEstimate: Array<QualityEstimate>;
  private qualityEstimateDetail: Array<QualityDetail>;
  private costCenter: CostCenter;
  private currentUrl: string;

  constructor(
    private router: Router,
    private contractDetailService: ContractDetailService,
    private modalController: ModalController
  ) {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentUrl = route.url;
      }
    });

    this.contractDetailService.getCostCenter().subscribe(value => {
      this.costCenter = value;
    });

    this.contractDetailService.getQualityEstimate().subscribe(value => {
      this.qualityEstimate = value;
      this.filteredQualityEstimate = value;
    });

    this.contractDetailService.getQualityEstimateDetail().subscribe(value => {
      this.qualityEstimateDetail = value;
    });
  }

  ngOnInit() {

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
  public openForm = async () => {
    const modal = await this.modalController.create({
      component: QualityEstimateFormComponent,
      componentProps: {
        costCenter: this.costCenter
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
}
