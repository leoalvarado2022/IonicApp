import {Component, Input, OnInit} from '@angular/core';
import {CostCenterList} from '@primetec/primetec-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cost-center-card',
  templateUrl: './cost-center-card.component.html',
  styleUrls: ['./cost-center-card.component.scss'],
})
export class CostCenterCardComponent implements OnInit {

  @Input() costCenter: CostCenterList = null;

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  /**
   * showDetails
   */
  public showDetails = () => {
    this.router.navigate(['contract-detail', this.costCenter.id]);
  }
}
