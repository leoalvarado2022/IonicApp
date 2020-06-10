import {Component} from '@angular/core';
import {AuthService} from '../shared/services/auth/auth.service';
import {StoreService} from '../shared/services/store/store.service';
import { TimerService } from '../services/storage/timer/timer.service';
import { Subscription } from 'rxjs';
import { StepperService } from '../services/storage/stepper/stepper.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage {

  private timer$: Subscription;
  private router$: Subscription;
  private step$: Subscription;

  constructor(
    private authService: AuthService,
    private storeService: StoreService,
    private timerService: TimerService,
    private stepperService: StepperService,
    private router: Router
  ) {

    this.router$ = this.router.events.subscribe(route => {
      if (route instanceof NavigationEnd ) {
        if (route.url === '/home-page') {
          console.log('estamos en home-page');
          this.timerService.startResume();
        } else {
          console.log('NO estamos en home-page');
          this.timerService.pauseStop();
        }
      }
    });
  }

  ionViewWillEnter() {
    // Store push token
    this.storePushToken();

    // Run all sync steps
    this.stepperService.runAllSteps();
  }

  ionViewDidEnter() {
    this.timerService.startResume();

    this.timer$ = this.timerService.getTimerNotifier().subscribe(() => {
      this.stepperService.runAllSteps();
    });
  }

  ionViewWillLeave() {
    this.timerService.pauseStop();
    this.timer$.unsubscribe();
    this.router$.unsubscribe();
    this.step$.unsubscribe();
  }

  /**
   * storePushToken
   */
  private storePushToken = (): void => {
    const user = this.storeService.getUser();
    const token = this.storeService.getPushToken();

    this.authService.savePushToken(user.id, token).subscribe();
  }

}
