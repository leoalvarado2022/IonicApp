import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SalesNotesService} from '../services/sales-notes.service';
import {ModalController} from '@ionic/angular';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {NoteFormComponent} from '../note-form/note-form.component';
import {StoreService} from '../../../shared/services/store/store.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController,
    private loaderService: LoaderService,
    private salesNotesService: SalesNotesService,
    private storeService: StoreService,
  ) { }

  ngOnInit() {
    this.salesNotesService.listSalesNotes().toPromise().then(res => {
      console.log('res ::: ', res);
    });
  }

  goBack() {
    this.router.navigate(['/home-page']);
  }

  public openModalForm = async () => {
    this.loaderService.startLoader('Cargando parámetros');

    const company = this.storeService.getActiveCompany();
    console.log('company ::: ', company);
    console.log('---- ::: ', this.storeService.getUser());
    const data = {
      company: company.id,
      user: company.user,
      filter: 'nvnv',
      platform: 'mobile',
    };

    const numberData = {
      company: company.id.toString(),
      user: company.user.toString(),
      area: 'ADM_Documentos',
      transmitter: 1,
      type: 'NVNV',
      platform: 'mobile',
      number: 0,
    };

    // console.log('currencies ::: ', currencies);
    const numberResponse: any = await this.salesNotesService.getNumber(numberData).toPromise();
    console.log('numberResponse ::: ', numberResponse);
    const paramResponse = await this.salesNotesService.documentParams(data).toPromise();
    const {data: {entities, currencies, items, warehouses, tab, units}}: any = paramResponse;
    console.log('paramResponse ::: ', paramResponse);

    const modal = await this.modalController.create({
      component: NoteFormComponent,
      componentProps: {
        tab,
        currencies,
        units,
        warehouses,
        clients: entities,
        products: items,
        number: numberResponse.data || 0,
        companyId: company.id,
      },
      backdropDismiss: false,
      keyboardClose: false,
    });

    this.loaderService.stopLoader();
    return await modal.present();
  }
}
