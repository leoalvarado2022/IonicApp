import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeolocationService} from '../shared/services/geolocation/geolocation.service';
import {AuthService} from '../shared/services/auth/auth.service';
import {StoreService} from '../shared/services/store/store.service';
import {NetworkService} from '../shared/services/network/network.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit, OnDestroy {

  private network$: Subscription;

  constructor(
    private geolocationService: GeolocationService,
    private authService: AuthService,
    private storeService: StoreService,
    private networkService: NetworkService
  ) {
    this.networkService.getNetworkStatus().subscribe(status => {
      if (status) {
        console.log('aqui mandamos a sincronizar');
      }
    });
  }

  ngOnInit(): void {
    const user = this.storeService.getUser();
    const token = this.storeService.getPushToken();

    this.authService.savePushToken(user.id, token).subscribe(success => {
      // BIEN
    }, error => {
      // MAL
    });
  }

  ngOnDestroy(): void {
    this.network$.unsubscribe();
  }

}
