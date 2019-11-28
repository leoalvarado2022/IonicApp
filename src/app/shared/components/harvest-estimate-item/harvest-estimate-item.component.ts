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
  private currentUrl: any;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }

  ngOnInit() {

  }

  /**
   * showList
   */
  public showList = () => {
    if (this.currentUrl !== '/home-page/harvest-estimate') {
      this.router.navigate(['/home-page/harvest-estimate']);
    }
  }

  /**
   * checkButton
   */
  public checkButton = () => {
    return this.currentUrl === '/home-page/harvest-estimate';
  }
}
