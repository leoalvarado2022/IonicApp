import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CostCenterList} from '@primetec/primetec-angular';
import {NetworkService} from '../../../../../shared/services/network/network.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cost-center-card',
  templateUrl: './cost-center-card.component.html',
  styleUrls: ['./cost-center-card.component.scss'],
})
export class CostCenterCardComponent implements OnInit, OnDestroy {

  @Input() costCenter: CostCenterList;
  @Output() cardClicked: EventEmitter<CostCenterList | null> = new EventEmitter<CostCenterList | null>();

  public isOnline: boolean;
  private isOnline$: Subscription;

  constructor(public networkService: NetworkService) {
    this.isOnline$ = this.networkService.getNetworkStatus().subscribe(status => {
      this.isOnline = status;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.isOnline$.unsubscribe();
  }

  /**
   * showDetails
   */
  public showDetails = () => {
    this.cardClicked.emit(this.costCenter);
  }

}
