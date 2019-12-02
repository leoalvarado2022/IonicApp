import {Component, Input, OnInit} from '@angular/core';
import {CostCenterList} from '@primetec/primetec-angular';
import {Router} from '@angular/router';
import {NetworkService} from '../../../../../shared/services/network/network.service';
import {ContractDetailService} from '../../../../../shared/services/contract-detail/contract-detail.service';

@Component({
  selector: 'app-cost-center-card',
  templateUrl: './cost-center-card.component.html',
  styleUrls: ['./cost-center-card.component.scss'],
})
export class CostCenterCardComponent implements OnInit {

  @Input() costCenter: CostCenterList;

  public isOnline: boolean;

  constructor(
    private router: Router,
    private networkService: NetworkService,
    private contractDetailService: ContractDetailService
  ) {
    this.networkService.onNetworkChange().subscribe(value => {
      this.isOnline = value;
    });
  }

  ngOnInit() {

  }

  /**
   * showDetails
   */
  public showDetails = () => {
    if (this.isOnline) {
      this.contractDetailService.setCostCenterListItem(this.costCenter);

      this.router.navigate(['home-page/contract-detail', this.costCenter.id]);
    }
  }
}
