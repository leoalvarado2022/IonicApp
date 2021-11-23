import {Component, OnInit} from '@angular/core';
import {TicketsService} from '../../services/tickets/tickets.service';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

  private allTickets: Array<any> = [];
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
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.allTickets = [];
    this.filteredTickets = [];
    this.init = 0;
    this.noMoreRows = false;
    this.loadTickets(null);
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
      filter: 'mi equipo',
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
        this.allTickets = success.data.listTickets;
        this.filteredTickets = success.data.listTickets;
      } else {
        this.allTickets = this.allTickets.concat(success.data.listTickets);
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
   * ticketSelected
   * @param ticket
   */
  public ticketSelected = (ticket: any) => {
    this.router.navigate(['/home-page/ticket-details-list', ticket.id]);
  }

  /**
   * reSync
   * @param event
   */
  public reSync = (event: any) => {
    this.allTickets = [];
    this.filteredTickets = [];
    this.init = 0;
    this.noMoreRows = false;
    this.loadTickets(null);
    event.target.complete();
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
