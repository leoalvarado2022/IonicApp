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
      // console.log(route, 'route')
      if (route instanceof NavigationEnd) {
        this.currentUrl = route.url;
      }
    });

    this.contractDetailService.getCostCenter().subscribe(value => {
      this.costCenter = value;
    });
  }

  ngOnInit() {
    // console.log('hola, aqui inicio note-item', this.router.url)
    if (this.currentUrl === undefined) {
      this.currentUrl = this.router.url;
    }
  }

  /**
   * showList
   */
  public showList = () => {
    // console.log(this.currentUrl);
    if (this.currentUrl === '/home-page/notes') {
      // console.log('luis es marico')
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

    // modal.onDidDismiss().then(() => {
    //   // console.log('se cerro , viva el clap')
    //   // if (data.data) {
    //     this.contractDetailService.getCostCenterDetail(this.costCenter.id.toString());
    //   // }
    // });

    return await modal.present();
  }

}
