import {Component, OnInit} from '@angular/core';
import {TicketsService} from '../../services/tickets/tickets.service';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './active.page.html',
  styleUrls: ['./active.page.scss'],
})
export class ActivePage implements OnInit {

  private allTickets: Array<any> = [];
  public filteredTickets: Array<any> = [];

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
    this.loadTickets();
  }

  /**
   * loadTickets
   */
  private loadTickets = () => {
    this.loaderService.startLoader('Cargando tickets');
    const user = this.storeService.getActiveCompany();

    const data = {
      filter: 'activos',
      user: user.user,
      init: 0,
      registers: 0,
      order: 0,
      search: ''
    };

    this.ticketsService.getTickets(data).subscribe((success: any) => {
      this.allTickets = success.data.listTickets;
      this.filteredTickets = success.data.listTickets;
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
    if (search) {
      this.filteredTickets = this.allTickets.filter(item => {
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          item.client.toLowerCase().includes(search.toLowerCase()) ||
          item.maxResolution.toLowerCase().includes(search.toLowerCase()) ||
          item.state.toLowerCase().includes(search.toLowerCase()) ||
          item.createdAt.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredTickets = this.allTickets;
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.filteredTickets = this.allTickets;
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
    this.loadTickets();
    event.target.complete();
  }

  /**
   * deleteTicket
   * @param ticket
   */
  deleteTicket(ticket: any) {
    console.log('deleteTicket', ticket);
  }

}
