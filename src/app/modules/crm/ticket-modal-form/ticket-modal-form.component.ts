import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import * as moment from 'moment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CameraService} from '../../../shared/services/camera/camera.service';
import {TicketsService} from '../services/tickets/tickets.service';
import {StoreService} from '../../../shared/services/store/store.service';

@Component({
  selector: 'app-ticket-modal-form',
  templateUrl: './ticket-modal-form.component.html',
  styleUrls: ['./ticket-modal-form.component.scss'],
})
export class TicketModalFormComponent implements OnInit {
  clientName: string;
  contactName: string;
  productName: string;
  workerName: string;
  currentStep = 1;

  ticketForm: FormGroup;

  types: Array<any> = [];
  functionalities: Array<any> = [];
  contacts: Array<any> = [];
  contactsFiltered: Array<any> = [];
  products: Array<any> = [];
  productsFiltered: Array<any> = [];
  workers: Array<any> = [];
  workersFiltered: Array<any> = [];
  statesFiltered: Array<any> = [];
  clientsFiltered: Array<any> = [];
  functionalitiesFiltered: Array<any> = [];
  attachments: Array<any> = [];

  datePickerObj: any = {
    fromDate: moment(), // default null
    mondayFirst: true, // default false
    setLabel: 'Ok',  // default 'Set'
    todayLabel: 'Hoy', // default 'Today'
    closeLabel: 'Cancelar', // default 'Close'
    titleLabel: 'Fecha de entrega', // default null
    monthsList: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    weeksList: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    dateFormat: 'DD-MM-YYYY', // default DD MMM YYYY
    clearButton : false , // default true
  };

  loadingClient = false;
  loadingStore = false;

  @Input() areas: Array<any> = [];
  @Input() clients: Array<any> = [];
  @Input() origins: Array<any> = [];
  @Input() periodicities: Array<any> = [];
  @Input() priorities: Array<any> = [];
  @Input() states: Array<any> = [];
  @Input() userCreator: any;
  @Input() userArea: any;
  @Input() getClients = (id, user): any => {};

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private cameraService: CameraService,
    private ticketsService: TicketsService,
    private storeService: StoreService,
  ) { }

  ngOnInit() {
    this.ticketForm = this.formBuilder.group({
      ticket: this.formBuilder.group({
        id: [0],
        origin_id: ['telefono', Validators.required],
        periodicity: ['diario', Validators.required],
        area_id: [Number(this.userArea), Validators.required],
        type: [null, Validators.required],
        client_id: [null, Validators.required],
        contact_id: [null, Validators.required],
        product: [null, Validators.required],
        funcionality_id: [null, Validators.required],
        // funcionality_id: [null],
        reference: [null, Validators.required],
        description: [null, Validators.required],
        createdAt: [moment().format('DD-MM-YYYY'), Validators.required],
      }),
      detail: this.formBuilder.group({
        id: [0],
        state: [null, Validators.required],
        // created_id: [{value: this.userCreator.id, disabled: true}, Validators.required],
        created_id: [{value: this.userCreator, disabled: true}, Validators.required],
        assigned_id: [this.userCreator, Validators.required],
        priority: ['normal', Validators.required],
        difficulty: [1, Validators.required],
        observations: [null],
      }),
    });

    if (this.userArea) {
      this.setTypes({
        detail: {
          value: Number(this.userArea),
        },
      });
    }
  }

  public increaseStep = () => {
    // console.log('this.ticketForm.value ::: ', this.ticketForm.value);
    this.currentStep += 1;
  }

  public checkNexButtonDisabled = (): boolean => {
    return (
      this.currentStep === 1 && this.ticketForm.get('ticket').invalid) ||
      (this.currentStep === 2 && (this.ticketForm.get('detail').invalid)
    );
  }

  public searchClient = (search: string) => {
    if (search) {
      this.clientsFiltered = this.clients.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.clientsFiltered = [];
    }
  }

  public cleanClientSearch = () => {
    this.ticketForm.get('ticket').get('client_id').patchValue(0);
    this.clientsFiltered = [];
    this.clientName = null;
  }

  public selectClient = async (client: any) => {
    this.ticketForm.get('ticket').get('client_id').patchValue(client.id);
    this.clientName = client.name;
    this.clientsFiltered = [];
    this.contactsFiltered = [];
    this.productsFiltered = [];

    this.ticketForm.get('ticket').patchValue({contact: 0, product: 0});
    this.loadingClient = true;
    this.contactName = 'Cargando...';
    this.productName = 'Cargando...';
    // const response = await this.getClients(client.id, this.userCreator.id);
    const response = await this.getClients(client.id, this.userCreator);
    this.loadingClient = false;
    this.contactName = null;
    this.productName = null;
    this.contacts = response.data.contacts;
    this.products = response.data.products;
    this.workers = response.data.workers;
    this.functionalities = response.data.functionalities;

    if (this.contactsFiltered.length === 1) {
      this.ticketForm.get('ticket').get('contact_id').patchValue(this.contactsFiltered[0].id);
    }
  }

  public searchContact = (search: string) => {
    if (search) {
      this.contactsFiltered = this.contacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.contactsFiltered = [];
    }
  }

  public cleanContactSearch = () => {
    this.ticketForm.get('ticket').get('contact_id').patchValue(0);
    this.contactsFiltered = [];
    this.contactName = null;
  }

  public selectContact = async (contact: any) => {
    this.ticketForm.get('ticket').get('contact_id').patchValue(contact.id);
    this.contactName = contact.name;
    this.contactsFiltered = [];
  }

  public searchProduct = (search: string) => {
    if (search) {
      this.productsFiltered = this.products.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.productsFiltered = [];
    }
  }

  public cleanProductSearch = () => {
    this.ticketForm.get('ticket').get('product').patchValue(0);
    this.productsFiltered = [];
    this.productName = null;
    this.functionalitiesFiltered = [];
  }

  public selectProduct = async (product: any) => {
    this.ticketForm.get('ticket').get('product').patchValue(product.id);
    this.productName = product.name;
    this.productsFiltered = [];
    this.functionalitiesFiltered = this.functionalities.filter(f => f.product === product.id);
    if (this.functionalitiesFiltered.length === 1) {
      this.ticketForm.get('ticket').get('funcionality_id').patchValue(this.functionalitiesFiltered[0].id);
    }
  }

  public searchWorker = (search: string) => {
    if (search) {
      this.workersFiltered = this.workers.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.workersFiltered = [];
    }
  }

  public cleanWorkerSearch = () => {
    this.ticketForm.get('detail').get('assigned_id').patchValue(null);
    this.workersFiltered = [];
    this.workerName = null;
  }

  public selectWorker = async (worker: any) => {
    this.ticketForm.get('detail').get('assigned_id').patchValue(worker.id);
    this.workerName = worker.name;
    this.workersFiltered = [];
  }

  public closeModal = (status: boolean = false): void => {
    this.modalController.dismiss(status);
  }

  public setTypes = ({detail: {value}}) => {
    this.types = this.areas.find(a => a.id === value)?.types ?? [];
    this.ticketForm.get('ticket').patchValue({
      type: this.types.length === 0 ? (this.types[0]?.name || '') : '',
    });
    this.ticketForm.get('detail').patchValue({state: null});
  }

  public setStates = ({detail: {value}}) => {
    const typeId = this.types.find(t => t.name === value) || '';
    this.statesFiltered = this.states.filter(c => c.ticket_type === typeId?.id?.toString());
    const defaultState = this.statesFiltered.find(s => s.name.toLowerCase() === 'abierto');
    this.ticketForm.get('detail').patchValue({
      state: defaultState ? defaultState.name : null,
    });
  }

  public openCamera = async () => {
    const base64 = await this.cameraService.openCamera();
    this.addAttachment(base64);
  }

  public openGallery = async () => {
    const base64 = await this.cameraService.openGallery();
    this.addAttachment(base64);
  }

  public deleteFile = (item: any) => {
    const findIndex = this.attachments.findIndex(i => i === item);

    if (findIndex > -1) {
      this.attachments = this.attachments.filter((value, index, array) => findIndex !== index);
    }
  }

  private addAttachment = (base64: string): void => {
    this.attachments.push({
      id: 0,
      file: base64.replace(/^data:.*,/, ''),
      name: 'Adjunto ' + (this.attachments.length + 1),
      application: 'image/jpeg',
      type: '.jpg',
      detail: 0,
    });
  }

  public submitTicket = async (fields: any) => {
    const company = this.storeService.getActiveCompany();

    fields.ticket.company_id = company.id;
    const response: any = await this.ticketsService.storeTicket(fields).toPromise();

    if (response.data?.created_id) {
      await this.modalController.dismiss(true);
    }
  }

  public submit = async () => {
    try {
      this.loadingStore = true;
      this.ticketForm.disable();
      const fields = this.ticketForm.getRawValue();
      const workerSelected = this.workers.find(w => w.id === fields.detail.assigned_id);

      fields.ticket.createdAt = moment(fields.ticket.createdAt, ['DD-MM-YYYY']).format('YYYY-MM-DD');
      fields.ticket.solution = '';
      fields.ticket.version = '';
      fields.detail.assign_client = workerSelected.clientContact;
      fields.detail.ticket = 0;
      fields.detail.public = true;
      fields.detail.temporal_id = moment().unix() + 1;
      fields.attachments = this.attachments;
      fields.wsAuthID = workerSelected.wsAuthID;

      await this.submitTicket(fields);

      this.ticketForm.enable();
      this.loadingStore = false;
    } catch (err) {
      this.ticketForm.enable();
      this.loadingStore = false;
    }
  }
}
