import { Component, OnInit, OnDestroy } from '@angular/core';
import { Quadrille } from '@primetec/primetec-angular';
import { Subscription } from 'rxjs';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';
import { StepNames } from 'src/app/services/storage/step-names';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { AlphabeticalOrderPipe } from 'src/app/shared/pipes/alphabetical-order/alphabetical-order.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quadrilles-list',
  templateUrl: './quadrilles-list.page.html',
  styleUrls: ['./quadrilles-list.page.scss'],
})
export class QuadrillesListPage implements OnInit, OnDestroy {

  // Quadrille
  public quadrilles: Array<Quadrille> = [];
  public filteredQuadrilles: Array<Quadrille> = [];

  // Workers
  private workers: Array<any> = [];

  private stepper$: Subscription;

  constructor(
    private stepperService: StepperService,
    private storageSyncService: StorageSyncService,
    private alphabeticalOrderPipe: AlphabeticalOrderPipe,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.stepper$ = this.stepperService.getStepper().subscribe(step => {
      if (step === StepNames.EndStoring ) {
        this.loadData();
      }
    });
  }

  ngOnDestroy() {
    this.stepper$.unsubscribe();
  }

  ionViewWillEnter() {
    this.loadData();
  }

  private loadData = (): void => {
    Promise.all([
      this.storageSyncService.getQuadrilles(),
      this.storageSyncService.getWorkers(),
    ]).then(data => {

      // Quadrilles
      this.quadrilles = this.alphabeticalOrderPipe.transform(data[0]);
      this.filteredQuadrilles = [...this.quadrilles];

      // Workers
      this.workers = [...data[1]];
    });
  }

  /**
   * searchQuadrille
   * @param search
   */
  public searchQuadrille = (search: string): void => {
    if (search) {
      this.filteredQuadrilles = this.quadrilles.filter(item => {
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.responsibleName.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredQuadrilles = [...this.quadrilles];
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = (): void => {
    this.filteredQuadrilles = [...this.quadrilles];
  }

  /**
   * reload
   * @param event
   */
  public reload = (event: any): void => {
    this.loadData();
    event.target.complete();
  }

  /**
   * selectQuadrille
   * @param id
   */
  public selectQuadrille = (id: number): void => {
    this.router.navigate(['/home-page/tally-workers-list', id]);
  }

  /**
   * getQuadrilleNumberWorkers
   * @param id
   */
  public getQuadrilleNumberWorkers = (id: number): number => {
    if (this.workers) {
      return this.workers.filter(item => item.quadrille === id).length;
    }

    return 0;
  }

}
