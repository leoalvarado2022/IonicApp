import {Component, Input, OnInit} from '@angular/core';
import {CostCenterList} from '@primetec/primetec-angular';
import {Router} from '@angular/router';
import {NetworkService} from '../../../shared/services/network/network.service';
import {Events} from '@ionic/angular';

@Component({
  selector: 'app-cost-center-card',
  templateUrl: './cost-center-card.component.html',
  styleUrls: ['./cost-center-card.component.scss'],
})
export class CostCenterCardComponent implements OnInit {

  @Input() costCenter: CostCenterList = null;

  constructor(
    private router: Router,
    private networkService: NetworkService,
    private events: Events
  ) {
    this.events.subscribe('appOnline', (status) => {
      this.networkService.setOnline();
      console.log('appOnline', status);
    });

    this.events.subscribe('appOffline', (status) => {
      this.networkService.setOffline();
      console.log('appOffline', status);
    });
  }

  ngOnInit() {

  }

  /**
   * showDetails
   */
  public showDetails = () => {
    console.log('showDetails', this.networkService.getNetworkStatus());

    if (this.networkService.getNetworkStatus()) {
      this.router.navigate(['contract-detail', this.costCenter.id]);
    }
  }
}
