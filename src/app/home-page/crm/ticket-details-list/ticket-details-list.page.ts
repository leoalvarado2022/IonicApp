import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {TicketsService} from '../services/tickets/tickets.service';
import {ActivatedRoute} from '@angular/router';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {HttpService} from '../../../shared/services/http/http.service';

@Component({
  selector: 'app-ticket-details-list',
  templateUrl: './ticket-details-list.page.html',
  styleUrls: ['./ticket-details-list.page.scss'],
})
export class TicketDetailsListPage implements OnInit {

  private id: string;
  public details: Array<any> = [];
  public header: any = null;

  constructor(
    private storeService: StoreService,
    private ticketsService: TicketsService,
    private activatedRoute: ActivatedRoute,
    private loaderService: LoaderService,
    private httpService: HttpService
  ) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
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
        element,
        types,
        states,
        clients,
        details,
        origins,
        priorities,
        periodicities
      } = success.data;

      console.log({success});

      this.header = element;
      this.details = [...details];

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

}
