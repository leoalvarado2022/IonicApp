import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {CostCenter, Note} from '@primetec/primetec-angular';
import {ModalController} from '@ionic/angular';
import {NotesFormComponent} from './notes-form/notes-form.component';
import {ContractDetailService} from '../../../shared/services/contract-detail/contract-detail.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {AlertService} from '../../../shared/services/alert/alert.service';
import {Subscription} from 'rxjs';
import {NetworkService} from '../../../shared/services/network/network.service';
import {StoreService} from '../../../shared/services/store/store.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit, OnDestroy {

  public costCenter: CostCenter;
  public filteredNotes: Array<Note>;
  private notes: Array<Note>;
  private currentUrl: string;
  public isOnline: boolean;

  public isOnline$: Subscription;
  private router$: Subscription;
  private store$: Subscription;

  constructor(
    private modalController: ModalController,
    private contractDetailService: ContractDetailService,
    private router: Router,
    private httpService: HttpService,
    private loaderService: LoaderService,
    private alertService: AlertService,
    private networkService: NetworkService,
    private storeService: StoreService
  ) {
    this.isOnline$ = this.networkService.getNetworkStatus().subscribe(status => {
      this.isOnline = status;
    });
  }

  ngOnInit() {
    this.router$ = this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentUrl = route.url;
      }
    });

    this.store$ = this.storeService.stateChanged.subscribe(data => {
      this.costCenter = this.storeService.getCostCenter();
      this.notes = this.storeService.getNotes();
      this.filteredNotes = this.storeService.getNotes();
    });
  }

  ngOnDestroy(): void {
    this.isOnline$.unsubscribe();
    this.router$.unsubscribe();
    this.store$.unsubscribe();
  }

  /**
   * checkButton
   */
  public checkButton = () => {
    return this.currentUrl === '/home-page/notes';
  }

  /**
   * searchNote
   * @param search
   */
  public searchNote = (search: string) => {
    if (search) {
      this.filteredNotes = this.notes.filter(item => {
        return (
          item.note.toLowerCase().includes(search.toLowerCase()) ||
          item.responsibleName.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredNotes = this.notes;
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.filteredNotes = this.notes;
  }

  /**
   * viewNote
   * @param item
   */
  public viewNote = async (note: Note) => {
    await this.openForm(note);
  }

  /**
   * openForm
   */
  public openForm = async (note: Note = null) => {
    const modal = await this.modalController.create({
      component: NotesFormComponent,
      componentProps: {
        costCenter: this.costCenter,
        note
      },
      backdropDismiss: false,
      keyboardClose: false,
      cssClass: 'full-screen-modal'
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.reloadList();
      }
    });

    return await modal.present();
  }

  /**
   * deleteNoteConfirm
   */
  public deleteNoteConfirm = async (note: Note) => {
    const response = await this.alertService.confirmAlert('Desea borrar esta nota?');

    if (response) {
      const newNote = Object.assign({}, note, {id: -note.id});
      this.storeNote(newNote);
    }
  }

  /**
   * storeNote
   * @param data
   */
  private storeNote = (data: any) => {
    this.loaderService.startLoader('Borrando nota');
    this.contractDetailService.storeNote(data).subscribe(success => {
      this.reloadList();
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
      this.httpService.errorHandler(error);
    });
  }

  /**
   * reloadList
   */
  public reloadList = () => {
    this.loaderService.startLoader('Cargando notas');
    this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString()).subscribe((success: any) => {
      this.storeService.setContractData(success.data);
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
    });
  }

}
