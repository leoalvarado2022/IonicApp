import {Component, OnInit} from '@angular/core';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {ActivatedRoute} from '@angular/router';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {ActionSheetController} from '@ionic/angular';
import {WorkersService} from './services/workers.service';

@Component({
  selector: 'app-rem-workers',
  templateUrl: './rem-workers.page.html',
  styleUrls: ['./rem-workers.page.scss'],
})
export class RemWorkersPage implements OnInit {

  private workers: Array<any> = [];
  public filteredWorkers: Array<any> = [];
  public quadrille: any;
  private quadrilles: Array<any> = [];
  public selectedWorkers: Array<any> = [];
  private buttons: Array<any> = [];

  constructor(
    private syncService: SyncService,
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private actionSheetController: ActionSheetController,
    private workersService: WorkersService
  ) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadWorkers(id);
  }

  /**
   * loadWorkers
   */
  private loadWorkers = async (id: string) => {
    this.loaderService.startLoader();
    const quadrilles = await this.syncService.getQuadrilles();
    const allWorkers = await this.syncService.getWorkers();

    if (quadrilles && allWorkers) {
      this.quadrilles = [...quadrilles];
      this.quadrille = quadrilles.find(item => item.id === +id);
      const workers = allWorkers.filter(item => item.quadrille === this.quadrille.id);
      this.workers = [...workers];
      this.filteredWorkers = [...workers];

      this.buildButtons();
    }

    this.loaderService.stopLoader();
  }

  /**
   * reload
   * @param event
   */
  public reload = async (event) => {
    const id = this.route.snapshot.paramMap.get('id');
    await this.loadWorkers(id);
    event.target.complete();
  }

  /**
   * markWorker
   * @param worker
   */
  public markWorker = (worker: any) => {
    if (this.selectedWorkers.includes(worker)) {
      const index = this.selectedWorkers.indexOf(worker);
      this.selectedWorkers.splice(index, 1);
    } else {
      this.selectedWorkers.push(worker);
    }
  }

  /**
   * selectQuadrille
   */
  public selectQuadrille = async () => {
    const actionSheet = await this.actionSheetController.create({
      header: 'Cuadrillas',
      buttons: [
        ...this.buttons,
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            this.selectedWorkers = [];
          }
        }]
    });

    await actionSheet.present();
  }

  /**
   * buildButtons
   */
  private buildButtons = () => {
    this.buttons = this.quadrilles
      .filter(item => item !== this.quadrille)
      .map(item => ({
        text: item.name,
        icon: 'people',
        handler: () => {
          this.transferWorkers();
        }
      }));
  }

  /**
   * transferWorkers
   */
  private transferWorkers = () => {
    this.loaderService.startLoader();
    this.workersService.transferWorkers(this.selectedWorkers).subscribe(success => {
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
    });
  }
}
