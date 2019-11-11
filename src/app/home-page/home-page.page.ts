import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor(public userServices: UserService) {
  }

  ngOnInit() {
  }

  photo() {
    console.log('photo');
  }
}
