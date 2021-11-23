import { HttpService } from './../shared/services/http/http.service';
import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { StoreService } from '../shared/services/store/store.service';
import { TimerService } from '../services/storage/timer/timer.service';
import { Subject } from 'rxjs';
import { StepperService } from '../services/storage/stepper/stepper.service';
import { Platform } from '@ionic/angular';
import {takeUntil, tap} from 'rxjs/operators';
import { GeolocationService } from '../shared/services/geolocation/geolocation.service';
import {NetworkService} from '../shared/services/network/network.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage {

  private subscription = new Subject();

  constructor(
    private authService: AuthService,
    private storeService: StoreService,
    private timerService: TimerService,
    private stepperService: StepperService,
    private httpService: HttpService,
    private platform: Platform,
    private geolocationService: GeolocationService,
    private networkService: NetworkService,
  ) {

  }

  ionViewWillEnter() {
    // Store push token
    this.storePushToken();

    // Section of code just for ask the location permission
    this.geolocationService.getCurrentPosition().subscribe(success => {
      // NICE
    });
  }

  ionViewDidEnter() {
    // Run all sync steps
    this.stepperService.syncAll();

    this.timerService.getTimerNotifier()
      .pipe(takeUntil(this.subscription))
      .subscribe(() => {
        let isOnline = false;
        this.networkService.getNetworkStatus().subscribe(status => {
          isOnline = status;
        });

        if (isOnline) {
          this.stepperService.syncAll();
        }
      });

    // StartTimer
    this.timerService.startResume();
  }

  ionViewWillLeave() {
    this.timerService.pauseStop();
    this.subscription.complete();
  }

  /**
   * storePushToken
   */
  private storePushToken = (): void => {
    const user = this.storeService.getUser();
    const token = this.storeService.getPushToken();

    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.authService.savePushToken(user.id, token).subscribe(() => {
          // NO SE HACE NADA
        }, error => {
          this.httpService.errorHandler(error);
        });
      }
    });
  }

}
