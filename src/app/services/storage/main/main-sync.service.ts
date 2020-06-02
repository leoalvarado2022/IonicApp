import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainSyncService {

  private syncChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {

  }

  /**
   * syncChangedSubscribrer
   */
  public syncChangedSubscribrer = () => {
    return this.syncChanged.asObservable();
  }

  /**
   * syncChangedEvent
   */
  public syncChangedEvent = () => {
    console.log('emit event');
    this.syncChanged.next(true);
  }

}
