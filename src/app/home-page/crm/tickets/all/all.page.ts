import {Component, OnInit} from '@angular/core';
import {TicketsService} from '../../services/tickets/tickets.service';
import {StoreService} from '../../../../shared/services/store/store.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

  constructor(
    private ticketsService: TicketsService,
    private storeService: StoreService,
    private httpService: HttpService,
    private loaderService: LoaderService
  ) {

  }

  ngOnInit() {
    this.loadTickets();
  }

  /**
   * loadTickets
   */
  private loadTickets = () => {
    this.loaderService.startLoader('Cargando tickets');
    const user = this.storeService.getUser();

    const data = {
      filter: '',
      user: user.id,
      init: 0,
      registers: 0,
      order: 0,
      search: ''
    };

    this.ticketsService.getTickets(data).subscribe(success => {
      console.log('getTickets', success);
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

  searchTickets(search: string) {

  }

  cancelSearch() {

  }

}
