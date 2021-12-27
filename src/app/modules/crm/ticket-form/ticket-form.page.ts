import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../../../shared/services/store/store.service';
import { LoaderService } from '../../../shared/services/loader/loader.service';
import { TicketsService } from '../services/tickets/tickets.service';
import { HttpService } from '../../../shared/services/http/http.service';
import { CameraService } from '../../../shared/services/camera/camera.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.page.html',
  styleUrls: ['./ticket-form.page.scss'],
})
export class TicketFormPage implements OnInit {

  public activeTab = 1;

  public ticketForm: FormGroup;
  private activeTicket: any = null;
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';
  public states: Array<any> = [];
  public users: Array<any> = [];
  public priorities: Array<any> = [];
  public difficulties: Array<any> = [
    { level: 1, name: '1' },
    { level: 2, name: '2' },
    { level: 3, name: '3' }
  ];

  public attachments: Array<any> = [];

  public readonly actionHeader: any = {
    header: 'Seleccione',
    keyboardClose: false,
    backdropDismiss: false
  };

  public datePickerObj: any = {
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

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private loaderService: LoaderService,
    private ticketsService: TicketsService,
    private httpService: HttpService,
    private router: Router,
    private cameraService: CameraService,
    private toastService: ToastService
  ) {

  }

  ngOnInit() {
    this.activeTicket = this.storeService.getActiveTicket() || {};
    this.states = this.storeService.getTicketStates() || [];
    this.states = this.states.filter(st => st.ticket_type === this.activeTicket.num_type_id);
    this.users = this.storeService.getTicketUsers();
    this.priorities = this.storeService.getTicketPriorities();
    const activeCompany = this.storeService.getActiveCompany();
    const details = this.storeService.getTicketDetails();

    const lastDetail = details.find(item => item.id === this.activeTicket?.tickets_det) || {};
    this.activeTicket.createdAt = moment(this.activeTicket?.createdAt, ['DD/MM/YYYY HH:mm']).format('YYYY-MM-DD HH:mm');
    this.activeTicket.description = this.cleanString(this.activeTicket?.description || '');
    this.activeTicket.reference = this.cleanString(this.activeTicket?.reference || '');

    this.ticketForm = this.formBuilder.group({
      id: [0, Validators.required],
      ticket: [this.activeTicket.id, Validators.required],
      state: [lastDetail ? lastDetail.state?.toLowerCase() : '', Validators.required],
      public: [false, Validators.required],
      created_id: [activeCompany.user, Validators.required],
      assigned_id: [activeCompany.user, Validators.required],
      observations: ['', Validators.required],
      commitmentAt: [moment(lastDetail?.commitmentAt || '1900-01-01', ['DD-MM-YYYY', 'YYYY-MM-DD']).format('DD/MM/YYYY')],
      commitmentInternAt: [moment(lastDetail?.commitmentInternAt || '1900-01-01', ['DD-MM-YYYY', 'YYYY-MM-DD']).format('DD/MM/YYYY')],
      difficulty: [lastDetail ? lastDetail.difficulty : '', Validators.required],
      priority: [lastDetail ? lastDetail.priority?.toLowerCase() : '', Validators.required],
      assign_client: [0, Validators.required],
      temporal_id: [0]
    });
  }

  /**
   * openCamera
   */
  public openCamera = async () => {
    const base64 = await this.cameraService.openCamera();
    this.addAttachment(base64);
  }

  /**
   * openGallery
   */
  public openGallery = async () => {
    const base64 = await this.cameraService.openGallery();
    this.addAttachment(base64);
  }

  /**
   * addAttachment
   */
  private addAttachment = (base64: string): void => {
    this.attachments.push({
      id: 0,
      file: base64.replace(/^data:.*,/, ''),
      name: 'Adjunto ' + (this.attachments.length + 1),
      application: 'image/jpeg',
      type: '.jpg',
      detail: this.activeTicket.id
    });
  }

  /**
   * submitDetail
   */
  public submitDetail = () => {
    const formData = Object.assign({}, this.ticketForm.value);
    const userSelected = this.users.find(i => i.id === formData.assigned_id);

    formData.assign_client = userSelected.clientContact;
    formData.observations = this.cleanString(formData.observations);
    formData.commitmentAt = formData.commitmentAt ? moment(formData.commitmentAt, ['DD/MM/YYYY']).format('YYYY-MM-DD') : moment('1900-01-01');
    formData.commitmentInternAt = formData.commitmentInternAt ? moment(formData.commitmentInternAt, ['DD/MM/YYYY']).format('YYYY-MM-DD') : moment('1900-01-01');

    const data = {
      ticket: this.activeTicket,
      detail: formData,
      attachments: this.attachments,
      wsAuthID: userSelected.wsAuthID
    };

    /*
    if(this.ticketValidation1(formData)){
      return ;
    }
    */

    if (this.ticketValidation2(formData)) {
      return;
    }

    if (this.ticketValidation3(formData)) {
      return;
    }

    if (this.ticketValidation4(formData)) {
      return;
    }

    this.storeDetail(data);
  }

  /**
   * storeDetail
   * @param data
   */
  private storeDetail = (data: any) => {
    this.loaderService.startLoader();
    this.ticketsService.storeTicket(data).subscribe((success: any) => {
      this.loaderService.stopLoader();
      this.router.navigate(['home-page/ticket-details-list', this.activeTicket.id]);
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

  /**
   * deleteFile
   * @param item
   */
  public deleteFile = (item: any) => {
    const findIndex = this.attachments.findIndex(i => i === item);

    if (findIndex > -1) {
      this.attachments = this.attachments.filter((value, index, array) => findIndex !== index);
    }
  }

  /**
   * cleanString
   * @param string
   */
  private cleanString = (string: string): string => {
    return string.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&#60;').replace(/>/g, '&#62;');
  }

  /**
   * Si el estado del ticket es cerrado y no tiene solución devuelve mensaje la_solucion_no_debe_estar_en_blanco
   */
  public ticketValidation1 = (formData: any): boolean => {
    if (formData.state.toLowerCase() === 'cerrado' && (this.activeTicket.solution.toLowerCase() === 'ninguna' || this.activeTicket.solution === '')) {
      this.toastService.warningToast('La solucion no debe estar en blanco');
      return true;
    }

    return false;
  }

  /**
   * Si el ticket es distinto a interno, el estado es abierto y esta asignado a cliente: devuelve el mensaje estado_abierto_no_puede_asignarse_a_cliente
   */
  public ticketValidation2 = (formData: any): boolean => {
    if (this.activeTicket.origin_id.toLowerCase() !== 'interno' && formData.state.toLowerCase() === 'abierto' && formData.assign_client) {
      this.toastService.warningToast('Estado abierto no se puede asignar a cliente');
      return true;
    }

    return false;
  }

  /**
   * Si el ticket esta asignado a cliente y el estado es distinto a cerrado, no vamos o en proceso: devuelve el mensaje solo_puede_asignarse_a_cliente_cerrado_no_vamos_y_en_proceso (Esta validación cambiará, se agrega estado por actualizar)
   * @param formData
   * @returns
   */
  public ticketValidation3 = (formData: any): boolean => {
    if (formData.assign_client && (formData.state.toLowerCase() !== 'cerrado' || formData.state.toLowerCase() !== 'no vamos' || formData.state.toLowerCase() !== 'en proceso' || formData.state.toLowerCase() !== 'por actualizar')) {
      this.toastService.warningToast('Solo puede asignarse a cliente estados: "cerrado", "no vamos", "por actualizar" y "en proceso"');
      return true;
    }

    return false;
  }

  /**
   * Si el ticket es interno y asignado a cliente devuelve el mensaje ticket_origen_interno_no_puede_asignarse_a_cliente
   * @param formData
   * @returns
   */
  public ticketValidation4 = (formData: any): boolean => {
    if (this.activeTicket.origin_id.toLowerCase() !== 'interno' && formData.assign_client) {
      this.toastService.warningToast('Ticket origen interno no puede asignarse a cliente');
      return true;
    }

    return false;
  }

}
