import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StoreService} from '../../../shared/services/store/store.service';
import {Chooser} from '@ionic-native/chooser/ngx';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {TicketsService} from '../services/tickets/tickets.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {Router} from '@angular/router';
import * as moment from 'moment';

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
    {level: 1, name: '1'},
    {level: 2, name: '2'},
    {level: 3, name: '3'}
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
    private chooser: Chooser,
    private toastService: ToastService,
    private loaderService: LoaderService,
    private ticketsService: TicketsService,
    private httpService: HttpService,
    private router: Router
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

    this.ticketForm = this.formBuilder.group({
      id: [0, Validators.required],
      ticket: [this.activeTicket.id, Validators.required],
      state: [lastDetail ? lastDetail.state.toLowerCase() : '', Validators.required],
      public: [false, Validators.required],
      created_id: [activeCompany.user, Validators.required],
      assigned_id: [activeCompany.user, Validators.required],
      observations: ['', Validators.required],
      commitmentAt: [lastDetail ? lastDetail.commitmentAt : ''],
      commitmentInternAt: [lastDetail ? lastDetail.commitmentInternAt : ''],
      difficulty: [lastDetail ? lastDetail.difficulty : '', Validators.required],
      priority: [lastDetail ? lastDetail.priority.toLowerCase() : '', Validators.required],
      assign_client: [0, Validators.required],
      temporal_id: [0]
    });
  }

  /**
   * pickFiles
   */
  public pickFiles = () => {
    this.chooser.getFile('image/*,video/*').then((data: any) => {
      this.attachments.push({
        id: 0,
        file: data.dataURI.replace(/^data:.*,/, ''),
        name: data.name,
        application: data.mediaType,
        type: this.getFileExtension(data.name),
        detail: this.activeTicket.id
      });
    }, error => {
      this.toastService.errorToast('Ocurrio un error');
    });
  };

  /**
   * getFileExtension3
   * @param filename
   */
  private getFileExtension = (filename: string): string => {
    return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
  };

  /**
   * submitDetail
   */
  public submitDetail = () => {
    const formData = Object.assign({}, this.ticketForm.value);
    const userSelected = this.users.find(i => i.id === formData.assigned_id);
    formData.assign_client = userSelected.clientContact === 0 ? false : true;
    formData.commitmentAt = formData.commitmentAt ? moment(formData.commitmentAt).format('YYYY-MM-DD') : '';
    formData.commitmentInternAt = formData.commitmentInternAt ? moment(formData.commitmentInternAt).format('YYYY-MM-DD') : '';
    this.activeTicket.maxResolution = moment(this.activeTicket.maxResolution).format('YYYY-MM-DD HH:mm:ss');
    this.activeTicket.createdAt = moment(this.activeTicket.createdAt).format('YYYY-MM-DD HH:mm:ss');

    const data = {
      ticket: this.activeTicket,
      detail: formData,
      attachments: this.attachments,
      wsAuthID: userSelected.wsAuthID
    };

    this.storeDetail(data);
  };

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
  };

  /**
   * deleteFile
   * @param item
   */
  public deleteFile = (item: any) => {
    const findIndex = this.attachments.findIndex(i => i === item);

    if (findIndex > -1) {
      this.attachments = this.attachments.filter((value, index, array) => findIndex !== index);
    }
  };

}
