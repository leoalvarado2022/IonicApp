import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {TicketsService} from '../services/tickets/tickets.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {Subscription} from 'rxjs';
import {NetworkService} from '../../../shared/services/network/network.service';
import * as moment from 'moment';

@Component({
  selector: 'app-ticket-details-list',
  templateUrl: './ticket-details-list.page.html',
  styleUrls: ['./ticket-details-list.page.scss'],
})
export class TicketDetailsListPage implements OnInit, OnDestroy {

  private id: string;
  public details: Array<any> = [];
  public ticket: any = null;
  private network$: Subscription;
  public isOnline = false;
  private now = moment();
  public openSelected = false;

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
    this.network$ = this.networkService.getNetworkStatus().subscribe((status: boolean) => this.isOnline = status);
  }

  ngOnDestroy(): void {
    this.network$.unsubscribe();
  }

  ionViewWillEnter() {
    this.loadTicket();
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
      const {
        ticket,
        details,
        states,
        workers,
        priorities
      } = success.data;

      this.ticket = ticket;
      this.details = [...details];

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
    return difference + ' h';
  }
}
