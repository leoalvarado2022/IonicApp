import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quality-estimate',
  templateUrl: './quality-estimate.page.html',
  styleUrls: ['./quality-estimate.page.scss'],
})
export class QualityEstimatePage implements OnInit {

  public qualityEstimate = [];
  public qualityEstimateDetail = [];

  constructor() {
    this.qualityEstimate = JSON.parse(localStorage.getItem('qualityEstimate'));
    this.qualityEstimateDetail = JSON.parse(localStorage.getItem('qualityEstimateDetail'));
  }

  ngOnInit() {

  }
}
