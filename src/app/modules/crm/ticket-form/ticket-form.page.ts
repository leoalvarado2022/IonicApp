import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../../../shared/services/store/store.service';
import { LoaderService } from '../../../shared/services/loader/loader.service';
import { TicketsService } from '../services/tickets/tickets.service';
import { HttpService } from '../../../shared/services/http/http.service';
import { CameraService } from '../../../shared/services/camera/camera.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ActionSheetController } from '@ionic/angular';

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

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private loaderService: LoaderService,
    private ticketsService: TicketsService,
    private httpService: HttpService,
    private router: Router,
    private cameraService: CameraService,
    private actionSheetController: ActionSheetController
  ) {

  }

  ngOnInit() {
    this.activeTicket = this.storeService.getActiveTicket();
    this.states = this.storeService.getTicketStates();
    this.users = this.storeService.getTicketUsers();
    this.priorities = this.storeService.getTicketPriorities();

    const activeCompany = this.storeService.getActiveCompany();
    const details = this.storeService.getTicketDetails();
    const lastDetail = details.find(item => item.id === this.activeTicket.tickets_det);
    this.activeTicket.createdAt = moment(this.activeTicket.createdAt, "DD/MM/YYYY HH:mm").format("YYYY-MM-DD HH:mm");
    this.activeTicket.description = this.cleanString(this.activeTicket.description);
    this.activeTicket.reference = this.cleanString(this.activeTicket.reference);

    this.ticketForm = this.formBuilder.group({
      id: [0, Validators.required],
      ticket: [this.activeTicket.id, Validators.required],
      state: [lastDetail ? lastDetail.state.toLowerCase() : '', Validators.required],
      public: [false, Validators.required],
      created_id: [activeCompany.user, Validators.required],
      assigned_id: [activeCompany.user, Validators.required],
      observations: ['', Validators.required],
      commitmentAt: [lastDetail ? moment(lastDetail.commitmentAt, "DD/MM/YYYY").format("YYYY-MM-DD") : '1900-01-01'],
      commitmentInternAt: [lastDetail ? moment(lastDetail.commitmentInternAt, "DD/MM/YYYY").format("YYYY-MM-DD") : '1900-01-01'],
      difficulty: [lastDetail ? lastDetail.difficulty : '', Validators.required],
      priority: [lastDetail ? lastDetail.priority.toLowerCase() : '', Validators.required],
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
    formData.commitmentAt = formData.commitmentAt ? moment(formData.commitmentAt).format('YYYY-MM-DD') : moment("1900-01-01");
    formData.commitmentInternAt = formData.commitmentInternAt ? moment(formData.commitmentInternAt).format('YYYY-MM-DD') : moment("1900-01-01");

    const data = {
      ticket: this.activeTicket,
      detail: formData,
      attachments: this.attachments,
      wsAuthID: userSelected.wsAuthID
    };

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

}
