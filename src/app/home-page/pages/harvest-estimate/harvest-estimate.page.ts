import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {HarvestEstimateFormComponent} from './harvest-estimate-form/harvest-estimate-form.component';
import {CostCenter, HarvestEstimate} from '@primetec/primetec-angular';

@Component({
  selector: 'app-harvest-estimate',
  templateUrl: './harvest-estimate.page.html',
  styleUrls: ['./harvest-estimate.page.scss'],
})
export class HarvestEstimatePage implements OnInit {

  public harvestEstimate: Array<HarvestEstimate> = [];
  private currentUrl: string;
  private readonly costCenter: CostCenter;

  constructor(
    private router: Router,
    private modalController: ModalController
  ) {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentUrl = route.url;
      }
    });

    const data = JSON.parse(localStorage.getItem('harvestEstimate'));
    this.costCenter = JSON.parse(localStorage.getItem('costCenter'));
    this.harvestEstimate = [...data];
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
      keyboardClose: false
    });

    modal.onDidDismiss().then((data) => {
      // QUE HACEMOS AQUI
    });

    return await modal.present();
  }
}
