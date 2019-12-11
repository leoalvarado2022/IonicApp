import {Component, OnInit} from '@angular/core';
import {GeolocationService} from '../shared/services/geolocation/geolocation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor(private geolocationService: GeolocationService) {

  }

  ngOnInit(): void {

  }

}
