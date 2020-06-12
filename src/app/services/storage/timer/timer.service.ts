import { Injectable } from '@angular/core';
import { interval, Subject, NEVER } from 'rxjs';
import { environment } from 'src/environments/environment';
import { switchMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  // Timer & Pauser
  private timer = interval(1000 * 60 * environment.syncTimerMinutes);
  private pauser = new Subject();
  private timerNotifier = new Subject();

  constructor() {
    this.startTimer();
  }

  /**
   * startTimer
   */
  private startTimer = (): void => {
    this.pauser.pipe(
      switchMap(paused => paused ? NEVER : this.timer.pipe(materialize())),
      dematerialize()
    ).subscribe( time => {
      this.timerNotifier.next(true);
    });
  }

  /**
   * pauseStop
   */
  public pauseStop = () => {
    this.pauser.next(true);
  }

  /**
   * startResume
   */
  public startResume = () => {
    this.pauser.next(false);
  }

  /**
   * getTimerNotifier
   */
  public getTimerNotifier = () => {
    return this.timerNotifier.asObservable();
  }

}
