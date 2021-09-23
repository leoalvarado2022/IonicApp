import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {IonTabs, ModalController} from '@ionic/angular';
import {TicketModalFormComponent} from '../ticket-modal-form/ticket-modal-form.component';
import {TicketsService} from '../services/tickets/tickets.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';

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
    this.numberTicket = 0;
  }

  private getClients = async (id, user) => {
    return this.ticketsService.getTicketUsers(id, user).toPromise();
  }

  public submitTicket = async (fields: any) => {
    const company = this.storeService.getActiveCompany();

    fields.ticket.company_id = company.id;
    const response: any = await this.ticketsService.storeTicket(fields).toPromise();

    if (response.data?.created_id) {
      const tabSelected = this.ticketTabs.getSelected();
      await this.ticketTabs.select(tabSelected);
      await this.modalController.dismiss();
      location.reload();
    }
  }

  public openModalForm = async () => {
    this.loaderService.startLoader('Cargando parámetros');
    const company = this.storeService.getActiveCompany();

    const response = await this.ticketsService.getTicketParams().toPromise();
    const {data: {areas, clients, origins, periodicities, priorities, states}}: any = response;
    console.log('areas ::: ', areas)
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
        submitTicket: this.submitTicket,
        // userCreator: {id: user.id, name: `${user.name} ${user.lastName}`},
        userCreator: company.user,
      },
      backdropDismiss: false,
      keyboardClose: false,
    });

    this.loaderService.stopLoader();
    return await modal.present();
  }
}
