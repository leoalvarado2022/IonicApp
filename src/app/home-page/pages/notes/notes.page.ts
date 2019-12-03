import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {CostCenter, Note} from '@primetec/primetec-angular';
import {ModalController} from '@ionic/angular';
import {NotesFormComponent} from './notes-form/notes-form.component';
import {ContractDetailService} from '../../../shared/services/contract-detail/contract-detail.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  private notes: Array<Note>;
  public filteredNotes: Array<Note>;
  private costCenter: CostCenter;
  private currentUrl: string;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private contractDetailService: ContractDetailService
  ) {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentUrl = route.url;
      }
    });

    this.contractDetailService.getNotes().subscribe(value => {
      this.notes = value;
      this.filteredNotes = value;
    });

    this.contractDetailService.getCostCenter().subscribe(value => {
      this.costCenter = value;
    });
  }

  ngOnInit() {

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
        this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString());
      }
    });

    return await modal.present();
  }

}
