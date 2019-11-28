import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-harvest-estimate',
  templateUrl: './harvest-estimate.page.html',
  styleUrls: ['./harvest-estimate.page.scss'],
})
export class HarvestEstimatePage implements OnInit {

  public harvestEstimate: Array<any> = [];
  private currentUrl: string;

  constructor(private router: Router) {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentUrl = route.url;
      }
    });

    const data = JSON.parse(localStorage.getItem('harvestEstimate'));
    this.harvestEstimate = [...data];
  }

  ngOnInit() {

  }

  /**
   * checkButton
   */
  public checkButton = () => {
    return this.currentUrl === '/home-page/harvest-estimate';
  }


}
