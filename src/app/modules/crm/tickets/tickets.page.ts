import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {IonTabs, ModalController} from '@ionic/angular';
import {TicketModalFormComponent} from '../ticket-modal-form/ticket-modal-form.component';
import {TicketsService} from '../services/tickets/tickets.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {TicketEventService} from '../../../helpers/ticket-event';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit, OnDestroy {
  @ViewChild('ticketTabs', {static: false}) ticketTabs: IonTabs;

  numberTicket = 0;
  private store$: Subscription;

  constructor(
    private storeService: StoreService,
    private router: Router,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private ticketsService: TicketsService,
    private loaderService: LoaderService,
    private ticketEventService: TicketEventService,
  ) {

  }

  ngOnDestroy(): void {
    this.store$.unsubscribe();
  }

  ngOnInit() {
    this.store$ = this.storeService.stateChanged.subscribe(data => {
      this.numberTicket = this.storeService.getTotalTicket();
    });
  }

  /**
   * @description activa el number ticket
   * @param tab
   */
  activeNumberTicket(tab: string) {
    const url = this.router.url.split('/');

    return tab === url[3];
  }

  /**
   * change
   * @param event
   */
  public change = (event: any) => {
    this.ticketEventService.setCurrentTicketTab(event.tab);
    this.numberTicket = 0;
  }

  private getClients = async (id, user) => {
    return this.ticketsService.getTicketUsers(id, user).toPromise();
  }

  public openModalForm = async () => {
    this.loaderService.startLoader('Cargando parámetros');
    const company = this.storeService.getActiveCompany();

    const response = await this.ticketsService.getTicketParams().toPromise();
    this.loaderService.stopLoader();

    const {data: {areas, clients, origins, periodicities, priorities, states}}: any = response;
    const modal = await this.modalController.create({
      component: TicketModalFormComponent,
      componentProps: {
        areas,
        clients,
        origins,
        periodicities,
        priorities,
        states,
        getClients: this.getClients,
        // userCreator: {id: user.id, name: `${user.name} ${user.lastName}`},
        userCreator: company.user,
        userArea: company.area,
      },
      backdropDismiss: false,
      keyboardClose: false,
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.ticketEventService.setTicketSaved(true);
      }
    });

    return await modal.present();
  }
}
