import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-quality-estimate',
  templateUrl: './quality-estimate.page.html',
  styleUrls: ['./quality-estimate.page.scss'],
})
export class QualityEstimatePage implements OnInit {

  public qualityEstimate = [];
  public qualityEstimateDetail = [];
  private currentUrl: string;

  constructor(private router: Router) {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentUrl = route.url;
      }
    });

    this.qualityEstimate = JSON.parse(localStorage.getItem('qualityEstimate'));
    this.qualityEstimateDetail = JSON.parse(localStorage.getItem('qualityEstimateDetail'));
  }

  ngOnInit() {

  }

  /**
   * checkButton
   */
  public checkButton = () => {
    return this.currentUrl === '/home-page/quality-estimate';
  }
}
