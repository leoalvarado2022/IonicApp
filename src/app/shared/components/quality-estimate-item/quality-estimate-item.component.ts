import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quality-estimate-item',
  templateUrl: './quality-estimate-item.component.html',
  styleUrls: ['./quality-estimate-item.component.scss'],
})
export class QualityEstimateItemComponent implements OnInit {

  @Input() item: any = null;

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  /**
   * showList
   */
  public showList = () => {
    this.router.navigate(['/home-page/quality-estimate']);
  }

}
