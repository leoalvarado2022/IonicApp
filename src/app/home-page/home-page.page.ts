import { HttpService } from './../shared/services/http/http.service';
import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { StoreService } from '../shared/services/store/store.service';
import { TimerService } from '../services/storage/timer/timer.service';
import { Subject } from 'rxjs';
import { StepperService } from '../services/storage/stepper/stepper.service';
import { Platform } from '@ionic/angular';
import { takeUntil } from 'rxjs/operators';

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
    private platform: Platform
  ) {

  }

  ionViewWillEnter() {
    // Store push token
    this.storePushToken();
  }

  ionViewDidEnter() {
    // Run all sync steps
    this.stepperService.syncAll();

    this.timerService.getTimerNotifier()
      .pipe(takeUntil(this.subscription))
      .subscribe(() => {
        this.stepperService.syncAll();
      });

    // StartTimer    
    this.timerService.startResume();
  }

  ionViewWillLeave() {
    this.timerService.pauseStop();
    this.subscription.next();
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
