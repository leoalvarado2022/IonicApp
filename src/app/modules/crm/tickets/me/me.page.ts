import {Component, OnInit} from '@angular/core';
import {TicketsService} from '../../services/tickets/tickets.service';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {Router} from '@angular/router';
import {TicketEventService} from '../../../../helpers/ticket-event';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {

  private myTickets: Array<any> = [];
  public filteredTickets: Array<any> = [];

  public maxRows = 20;
  public init = 0;
  public noMoreRows = false;
  public search = '';

  constructor(
    private ticketsService: TicketsService,
    private storeService: StoreService,
    private httpService: HttpService,
    private loaderService: LoaderService,
    private router: Router,
    private ticketEventService: TicketEventService,
  ) {

  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.myTickets = [];
    this.filteredTickets = [];
    this.init = 0;
    this.noMoreRows = false;
    this.loadTickets(null);

    this.ticketEventService.getTicketSaved().subscribe(value => {
      this.ticketEventService.getCurrentTicketTab().subscribe(currentTab => {
        if (value && currentTab === 'me') {
          this.myTickets = [];
          this.filteredTickets = [];
          this.cancelSearch();
          this.ticketEventService.setTicketSaved(false);
        }
      });
    });
  }

  /**
   * loadTickets
   */
  private loadTickets = (event, firstLoad = true) => {
    if (!event) {
      this.loaderService.startLoader('Cargando tickets');
    }
    const user = this.storeService.getActiveCompany();

    const data = {
      filter: 'mis tickets',
      user: user.user,
      pagination: {
        init: this.init,
        registers: this.maxRows,
        order: 1,
        search: this.search,
      },
    };

    this.ticketsService.getTickets(data).subscribe((success: any) => {
      if (this.search) {
        this.myTickets = success.data.listTickets;
        this.filteredTickets = success.data.listTickets;
      } else {
        this.myTickets = this.myTickets.concat(success.data.listTickets);
        this.filteredTickets = this.filteredTickets.concat(success.data.listTickets);
      }
      this.storeService.setTotalTicket(+success.data.total);

      if (success.data.listTickets.length < this.maxRows || success.data.listTickets.length === 0) {
        this.noMoreRows = true;
      }

      if (!firstLoad || (event && success.data.listTickets.length)) {
        event.target.complete();
      }

      this.init += success.data.listTickets.length;
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

  /**
   * searchTickets
   * @param search
   */
  public searchTickets = (search: string) => {
    this.search = search;
    this.noMoreRows = false;
    this.init = 0;
    this.loadTickets(null);
  }

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.init = 0;
    this.search = '';
    this.noMoreRows = false;
    this.loadTickets(null);
  }

  /**
   * reSync
   * @param event
   */
  public reSync = (event: any) => {
    this.myTickets = [];
    this.filteredTickets = [];
    this.init = 0;
    this.noMoreRows = false;
    this.loadTickets(null);
    event.target.complete();
  }

  /**
   * ticketSelected
   * @param ticket
   */
  public ticketSelected = (ticket: any) => {
    this.router.navigate(['/home-page/ticket-details-list', ticket.id]);
  }

  /**
   * deleteTicket
   * @param ticket
   */
  deleteTicket(ticket: any) {
    console.log('deleteTicket', ticket);
  }

  nextSearch(event) {
    this.loadTickets(event, false);
  }
}
