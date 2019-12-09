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
  private costCenter$: Subscription;
  private notes$: Subscription;

  constructor(
    private modalController: ModalController,
    private contractDetailService: ContractDetailService,
    private router: Router,
    private httpService: HttpService,
    private loaderService: LoaderService,
    private alertService: AlertService,
    private networkService: NetworkService
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

    this.costCenter$ = this.contractDetailService.getCostCenter().subscribe(value => {
      this.costCenter = value;
    });

    this.notes$ = this.contractDetailService.getNotes().subscribe(value => {
      this.notes = value;
      this.filteredNotes = value;
    });
  }

  ngOnDestroy(): void {
    this.isOnline$.unsubscribe();
    this.router$.unsubscribe();
    this.costCenter$.unsubscribe();
    this.notes$.unsubscribe();
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
        this.reloadList().then(success => {
          // TERMINADO
        });
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
      await this.storeNote(newNote);
      await this.reloadList();
    }
  }

  /**
   * storeNote
   * @param data
   */
  private storeNote = (data: any) => {
    return new Promise(async (resolve, reject) => {
      await this.loaderService.startLoader('Borrando nota');
      this.contractDetailService.storeNote(data).subscribe(async success => {
        await this.loaderService.stopLoader();
        resolve(true);
      }, async error => {
        await this.loaderService.stopLoader();
        this.httpService.errorHandler(error);
        resolve(false);
      });
    });
  }

  /**
   * reloadList
   */
  public reloadList = () => {
    return new Promise(async (resolve, reject) => {
      await this.loaderService.startLoader('Cargando estimaciones');
      this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString()).subscribe(async success => {
        await this.loaderService.stopLoader();
        resolve(true);
      }, async error => {
        await this.loaderService.stopLoader();
        resolve(false);
      });
    });
  }

}
