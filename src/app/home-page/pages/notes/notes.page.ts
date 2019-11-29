import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {CostCenter, Note} from '@primetec/primetec-angular';
import {ModalController} from '@ionic/angular';
import {NotesFormComponent} from './notes-form/notes-form.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  public notes: Array<Note> = [];
  private currentUrl: string;
  private readonly costCenter: CostCenter;

  constructor(
    private router: Router,
    private modalController: ModalController
  ) {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentUrl = route.url;
      }
    });

    const data = JSON.parse(localStorage.getItem('notes'));
    this.notes = [...data];
    this.costCenter = JSON.parse(localStorage.getItem('costCenter'));
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
   * openForm
   */
  public openForm = async () => {
    const modal = await this.modalController.create({
      component: NotesFormComponent,
      componentProps: {
        costCenter: this.costCenter
      },
      backdropDismiss: false,
      keyboardClose: false
    });

    modal.onDidDismiss().then((data) => {
      // QUE HACEMOS AQUI
    });

    return await modal.present();
  }

}
