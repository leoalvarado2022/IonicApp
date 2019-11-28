import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-harvest-estimate',
  templateUrl: './harvest-estimate.page.html',
  styleUrls: ['./harvest-estimate.page.scss'],
})
export class HarvestEstimatePage implements OnInit {

  public harvestEstimate = [];

  constructor() {
    const data = JSON.parse(localStorage.getItem('harvestEstimate'));
    this.harvestEstimate = [...data];
  }

  ngOnInit() {

  }


}
