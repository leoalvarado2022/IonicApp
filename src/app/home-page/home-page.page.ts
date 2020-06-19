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

  constructor(
    private authService: AuthService,
    private storeService: StoreService,
    private timerService: TimerService,
    private stepperService: StepperService,
    private router: Router
  ) {
    /*
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
    */
  }

  ionViewWillEnter() {
    // Store push token
    this.storePushToken();
  }

  ionViewDidEnter() {
    // Run all sync steps
    this.stepperService.syncAll();

    this.timer$ = this.timerService.getTimerNotifier().subscribe(() => {
      // LOGICA FUERTE
      /*
      console.log('verificar ruta dentro del timer', this.router.url);

      if (this.router.url.includes('tarja_tarjas') || this.router.url.includes('tally-workers-list') || this.router.url.includes('tallies-list')) {
        // this.stepperService.runTallyRecordStep();
        this.stepperService.onlySyncTallies();
      } else {
        this.stepperService.runAllSteps();
      }
      */

     this.stepperService.syncAll();
    });

    // StartTimer
    console.log('StartTimer');
    this.timerService.startResume();
  }

  ionViewWillLeave() {
    console.log('StopTimer');
    this.timerService.pauseStop();
    this.timer$.unsubscribe();
    // this.router$.unsubscribe();
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
