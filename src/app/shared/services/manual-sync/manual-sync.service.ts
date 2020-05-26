import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManualSyncService {

  private syncEvent = new BehaviorSubject<boolean>(false);

  constructor() {

  }

  public sync() {
    this.syncEvent.next(true);
  }

  public eventSubscription() {
    return this.syncEvent.asObservable();
  }
  
}
