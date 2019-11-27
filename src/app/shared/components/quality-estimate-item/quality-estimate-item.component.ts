import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quality-estimate-item',
  templateUrl: './quality-estimate-item.component.html',
  styleUrls: ['./quality-estimate-item.component.scss'],
})
export class QualityEstimateItemComponent implements OnInit {

  @Input() item: any = null;

  constructor() {
  }

  ngOnInit() {
  }

}
