import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {HarvestEstimateFormComponent} from './harvest-estimate-form/harvest-estimate-form.component';
import {CostCenter, HarvestEstimate} from '@primetec/primetec-angular';
import {ContractDetailService} from '../../../shared/services/contract-detail/contract-detail.service';

@Component({
  selector: 'app-harvest-estimate',
  templateUrl: './harvest-estimate.page.html',
  styleUrls: ['./harvest-estimate.page.scss'],
})
export class HarvestEstimatePage implements OnInit {

  private harvestEstimate: Array<HarvestEstimate>;
  public filteredHarvestEstimate: Array<HarvestEstimate>;
  private currentUrl: string;
  private costCenter: CostCenter;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private contractDetailService: ContractDetailService
  ) {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentUrl = route.url;
      }
    });

    this.contractDetailService.getHarvestEstimate().subscribe(value => {
      this.harvestEstimate = value;
      this.filteredHarvestEstimate = value;
    });

    this.contractDetailService.getCostCenter().subscribe(value => {
      this.costCenter = value;
    });
  }

  ngOnInit() {

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
  public openForm = async () => {
    const modal = await this.modalController.create({
      component: HarvestEstimateFormComponent,
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
}
