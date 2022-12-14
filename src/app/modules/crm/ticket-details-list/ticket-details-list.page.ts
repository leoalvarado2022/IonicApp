import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from '../../../shared/services/store/store.service';
import { TicketsService } from '../services/tickets/tickets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from '../../../shared/services/loader/loader.service';
import { HttpService } from '../../../shared/services/http/http.service';
import { Subject } from 'rxjs';
import { NetworkService } from '../../../shared/services/network/network.service';
import * as moment from 'moment';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ticket-details-list',
  templateUrl: './ticket-details-list.page.html',
  styleUrls: ['./ticket-details-list.page.scss'],
})
export class TicketDetailsListPage implements OnInit {

  private id: string;
  public details: Array<any> = [];
  public ticket: any = null;
  private now = moment();
  public openSelected = false;
  private unsubscriber = new Subject();

  constructor(
    private storeService: StoreService,
    private ticketsService: TicketsService,
    private activatedRoute: ActivatedRoute,
    private loaderService: LoaderService,
    private httpService: HttpService,
    private networkService: NetworkService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    this.loadTicket();
  }

  /**
   * getNetworkStatus
   */
  public getNetworkStatus = () => {
    return this.networkService.getNetworkStatus();
  }

  /**
   * loadTicket
   */
  public loadTicket = () => {
    this.loaderService.startLoader();

    const user = this.storeService.getActiveCompany();
    const data = {
      user: user.user
    };

    this.ticketsService.getTicket(this.id, data).subscribe((success: any) => {
      console.log('success ::: ', success);
      const {
        element,
        details,
        states,
        workers,
        priorities
      } = success.data;

      this.ticket = element;
      this.details = [...details];

      console.log('this.ticket ::: ', this.ticket);
      this.storeService.setActiveTicket(this.ticket);
      this.storeService.setTicketStates(states);
      this.storeService.setTicketUsers(workers);
      this.storeService.setTicketPriorities(priorities);
      this.storeService.setTicketDetails(details);

      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

  /**
   * reSync
   * @param event
   */
  public reSync = (event: any) => {
    this.loadTicket();
    event.target.complete();
  }

  /**
   * openForm
   */
  public openForm = () => {
    this.router.navigate(['home-page/ticket-form']);
  }

  /**
   * @description tiempo restante
   * @param date
   */
  public remainingTime(date: string): string {
    const _date = moment(date, 'DD/MM/YYYY HH:mm:ss');
    const difference = _date.diff(this.now, 'hours');

    if (difference < 0) {
      return;
    }

    return difference + ' h';
  }

  /**
   * goBack
   */
  public goBack = () => {
    this.router.navigate(['/home-page/crm_tickets/me']);
  }
}
