import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private menu: MenuController,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  routerLink = (router: string) => {
    this.menu.close('menu');
    this.router.navigate([router]);
  };


  close = () => {
    this.menu.close('menu');
    this.authService.closeSesion();
  };
}
