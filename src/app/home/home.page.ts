import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  /**
   * getVersion
   */
  public getVersion = (): string => {
    return environment.appVersion;
  }

}
