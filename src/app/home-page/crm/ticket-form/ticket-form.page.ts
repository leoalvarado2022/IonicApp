import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StoreService} from '../../../shared/services/store/store.service';
import {Chooser} from '@ionic-native/chooser/ngx';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {LoaderService} from "../../../shared/services/loader/loader.service";
import {TicketsService} from "../services/tickets/tickets.service";
import {HttpService} from "../../../shared/services/http/http.service";
import {Router} from "@angular/router";

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
    {level: 1, name: 'facil'},
    {level: 2, name: 'medio'},
    {level: 3, name: 'dificil'}
  ];

  public attachments: Array<any> = [];

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

    this.ticketForm = this.formBuilder.group({
      id: [0, Validators.required],
      ticket: [this.activeTicket.id, Validators.required],
      state: ['', Validators.required],
      public: ['', Validators.required],
      created_id: [this.activeTicket.client_id, Validators.required],
      assigned_id: ['', Validators.required],
      observations: ['', Validators.required],
      commitmentAt: [this.activeTicket.internalCommitment, Validators.required],
      commitmentInternAt: [this.activeTicket.clientCommitment, Validators.required],
      difficulty: ['', Validators.required],
      priority: ['', Validators.required],
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
  }

  /**
   * getFileExtension3
   * @param filename
   */
  private getFileExtension = (filename: string): string => {
    return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
  }

  /**
   * submitDetail
   */
  public submitDetail = () => {
    const formData = Object.assign({}, this.ticketForm.value);
    const element = this.activeTicket;
    element.details = [];
    element.details.push(formData);
    element.attached = this.attachments;
    const data = {element};
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

}
