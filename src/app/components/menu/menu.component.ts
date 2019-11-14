import {AfterContentChecked, AfterViewChecked, Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {UserService} from '../../services/user/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  name: string;
  profile: any = null;

  constructor(private menu: MenuController,
              private router: Router,
              private authService: AuthService,
              public userService: UserService) {
  }

  ngOnInit() {
    this.userService.getMenuProfiles().subscribe((menuProfile: any) => {
      if (menuProfile.data && menuProfile.data.user) {
        this.profile = menuProfile.data.user;
      }
    });
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
