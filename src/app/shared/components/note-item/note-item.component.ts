import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {CostCenter, Note} from '@primetec/primetec-angular';
import {NotesFormComponent} from '../../../home-page/pages/notes/notes-form/notes-form.component';
import {ModalController} from '@ionic/angular';
import {ContractDetailService} from '../../services/contract-detail/contract-detail.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
})
export class NoteItemComponent implements OnInit {

  @Input() item: any = null;

  private currentUrl: string;
  private costCenter: CostCenter;

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

    this.contractDetailService.getCostCenter().subscribe(value => {
      this.costCenter = value;
    });
  }

  ngOnInit() {

  }

  /**
   * showList
   */
  public showList = () => {
    if (this.currentUrl === '/home-page/notes') {
      this.openForm();
    }

    this.router.navigate(['/home-page/notes']);
  }

  /**
   * openForm
   */
  private openForm = async () => {
    const modal = await this.modalController.create({
      component: NotesFormComponent,
      componentProps: {
        costCenter: this.costCenter,
        note: this.item
      },
      backdropDismiss: false,
      keyboardClose: false,
      cssClass: 'full-screen-modal'
    });

    /*
    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString());
      }
    });
    */

    return await modal.present();
  }

}
