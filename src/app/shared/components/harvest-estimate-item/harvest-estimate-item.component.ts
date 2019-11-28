import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-harvest-estimate-item',
  templateUrl: './harvest-estimate-item.component.html',
  styleUrls: ['./harvest-estimate-item.component.scss'],
})
export class HarvestEstimateItemComponent implements OnInit {

  @Input() item: any = null;
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
