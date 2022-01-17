import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketEventService {
  public readonly ticketSaved: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly currentTicketTab: BehaviorSubject<string> = new BehaviorSubject<string>('me');

  public getTicketSaved = (): BehaviorSubject<boolean> => {
    return this.ticketSaved;
  }

  public setTicketSaved = (value: boolean) => {
    this.ticketSaved.next(value);
  }

  public getCurrentTicketTab = (): BehaviorSubject<string> => {
    return this.currentTicketTab;
  }

  public setCurrentTicketTab = (value: string) => {
    this.currentTicketTab.next(value);
  }
}
