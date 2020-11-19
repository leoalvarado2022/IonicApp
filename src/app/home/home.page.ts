import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public appService: AppService) {

  }

  ngOnInit(): void {

  }

}
