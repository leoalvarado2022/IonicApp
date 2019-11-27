import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quality-estimate-item',
  templateUrl: './quality-estimate-item.component.html',
  styleUrls: ['./quality-estimate-item.component.scss'],
})
export class QualityEstimateItemComponent implements OnInit {

  @Input() item: any = null;
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
    if (this.currentUrl !== '/quality-estimate') {
      this.router.navigate(['quality-estimate']);
    }
  }

  /**
   * checkButton
   */
  public checkButton = () => {
    return this.currentUrl === '/quality-estimate';
  }

}
