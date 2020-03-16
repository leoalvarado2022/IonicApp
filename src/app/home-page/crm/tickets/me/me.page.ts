import {Component, OnInit} from '@angular/core';
import {TicketsService} from '../../services/tickets/tickets.service';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {

  private myTickets: Array<any> = [];
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
    this.loadTickets();
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
      filter: 'activo',
      user: user.user,
      init: 0,
      registers: 0,
      order: 0,
      search: ''
    };

    this.ticketsService.getTickets(data).subscribe((success: any) => {
      this.myTickets = success.data.listTickets;
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
      this.filteredTickets = this.myTickets.filter(item => {
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          item.client.toLowerCase().includes(search.toLowerCase()) ||
          item.maxResolution.toLowerCase().includes(search.toLowerCase()) ||
          item.state.toLowerCase().includes(search.toLowerCase()) ||
          item.createdAt.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredTickets = this.myTickets;
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.filteredTickets = this.myTickets;
  }

  /**
   * reSync
   * @param event
   */
  public reSync = (event: any) => {
    this.myTickets = [];
    this.filteredTickets = [];
    this.loadTickets();
    event.target.complete();
  }

  /**
   * ticketSelected
   * @param ticket
   */
  public ticketSelected = (ticket: any) => {
    this.router.navigate(['/home-page/ticket-detail', ticket.id]);
  }

  /**
   * deleteTicket
   * @param ticket
   */
  deleteTicket(ticket: any) {
    console.log('deleteTicket', ticket);
  }

}
