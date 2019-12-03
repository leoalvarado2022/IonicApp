import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HarvestEstimate} from '@primetec/primetec-angular';

interface Arrows extends HarvestEstimate {
  arrow: string;
  color: string;
}

@Component({
  selector: 'app-harvest-estimate-item',
  templateUrl: './harvest-estimate-item.component.html',
  styleUrls: ['./harvest-estimate-item.component.scss'],
})
export class HarvestEstimateItemComponent implements OnInit {

  @Input() item: Arrows = null;
  @Input() isOld = false;

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  /**
   * showList
   */
  public showList = () => {
    this.router.navigate(['/home-page/harvest-estimate']);
  }

}
