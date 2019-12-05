import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CostCenterList} from '@primetec/primetec-angular';
import {Router} from '@angular/router';
import {NetworkService} from '../../../../../shared/services/network/network.service';

@Component({
  selector: 'app-cost-center-card',
  templateUrl: './cost-center-card.component.html',
  styleUrls: ['./cost-center-card.component.scss'],
})
export class CostCenterCardComponent implements OnInit {

  @Input() costCenter: CostCenterList;
  @Output() cardClicked: EventEmitter<CostCenterList | null> = new EventEmitter<CostCenterList | null>();

  constructor(
    private router: Router,
    public networkService: NetworkService
  ) {

  }

  ngOnInit() {

  }

  /**
   * showDetails
   */
  public showDetails = () => {
    this.cardClicked.emit(this.costCenter);
  }

}
