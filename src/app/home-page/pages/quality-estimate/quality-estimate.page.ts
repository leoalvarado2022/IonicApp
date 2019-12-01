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

  public qualityEstimate: Array<QualityEstimate>;
  public qualityEstimateDetail: Array<QualityDetail>;
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
      keyboardClose: false
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString());
      }
    });

    return await modal.present();
  }
}
