import {Component, OnInit} from '@angular/core';
import * as MenuAction from '../store/menu/menu.action';
import {Store} from '@ngrx/store';
import {StorageService} from '../services/storage/storage.service';
import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor(public store: Store<any>,
              private storage: StorageService,
              private userService: UserService) {
    this.userService.getUserData().then(data => this.store.dispatch(new MenuAction.AddProfile(data)));
  }

  ngOnInit() {
  }
}
