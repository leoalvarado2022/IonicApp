import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {CostCenterList, Quadrille} from '@primetec/primetec-angular';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tally-list',
  templateUrl: './tally-list.page.html',
  styleUrls: ['./tally-list.page.scss'],
})
export class TallyListPage implements OnInit, OnDestroy {

  // Quadrille
  public quadrilles: Array<Quadrille> = [];
  public filteredQuadrilles: Array<Quadrille> = [];
  public activeQuadrille: Quadrille = null;

  // Worker
  private workers: Array<any> = [];
  public filteredWorkers: Array<any> = [];
  public selectedWorkers: Array<any> = [];
  public activeWorker: any = null;

  // Tallies
  private tallies: Array<any> = [];
  public filteredTallies: Array<any> = [];

  // Form dates
  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';
  public currentDate = moment(moment.utc(new Date())).local().startOf('day').toISOString();

  private costCenters: Array<CostCenterList> = [];
  private labors: Array<any> = [];

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.quadrilles = [];
    this.filteredQuadrilles = [];
    this.activeQuadrille = null;

    this.workers = [];
    this.filteredWorkers = [];
    this.selectedWorkers = [];
    this.activeWorker = [];

    this.tallies = [];
    this.filteredTallies = [];
  }

  /**
   * loadData
   */
  private loadData = () => {
    // Load quadrilles
    this.quadrilles = this.storeService.getQuadrilles();
    this.filteredQuadrilles = this.quadrilles;
    this.activeQuadrille = null;

    // Workers
    this.workers = this.storeService.getWorkers();
    this.filteredWorkers = [];
    this.selectedWorkers = [];
    this.activeWorker = null;

    // Tallies
    this.tallies = this.storeService.getTallies();
    this.filteredTallies = [];

    // Form data
    this.costCenters = this.storeService.getCostCenters();
    this.labors = this.storeService.getLabors();

    if (this.quadrilles.length === 1) {
      this.selectQuadrille(this.quadrilles[0]);
    }
  };

  /**
   * getQuadrilleWorkers
   * @param id
   */
  public getQuadrilleWorkers = (id: any) => {
    if (this.workers) {
      return this.workers.filter(item => item.quadrille === id).length;
    }

    return 0;
  };

  /**
   * searchQuadrille
   * @param search
   */
  public searchQuadrille = (search: string) => {
    if (search) {
      this.filteredQuadrilles = this.quadrilles.filter(item => {
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.responsibleName.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredQuadrilles = this.quadrilles;
    }
  };

  /**
   * searchWorker
   * @param search
   */
  public searchWorker = (search: string) => {
    if (search) {
      this.filteredWorkers = this.getWorkersFilteredByQuadrille().filter(item => {
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          item.identifier.toLowerCase().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredWorkers = this.getWorkersFilteredByQuadrille();
    }
  };

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.filteredQuadrilles = this.quadrilles;
  };

  /**
   * reload
   * @param event
   */
  public reload = (event: any) => {
    this.loadData();
    event.target.complete();
  };

  /**
   * selectQuadrille
   * @param quadrille
   */
  public selectQuadrille = (quadrille: Quadrille) => {
    this.activeQuadrille = quadrille;
    this.filteredQuadrilles = this.quadrilles;
    this.selectedWorkers = [];
    this.filteredWorkers = this.getWorkersFilteredByQuadrille();
  };

  /**
   * getWorkersFilteredByQuadrille
   */
  public getWorkersFilteredByQuadrille = (): Array<any> => {
    if (this.activeQuadrille) {
      return this.workers.filter(item => item.quadrille === this.activeQuadrille.id && this.validContractDate(item));
    }

    return [];
  };

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
  };

  /**
   * moveDayOnDate
   * @param move
   */
  public moveDayOnDate = (move: number) => {
    if (this.currentDate) {
      this.currentDate = moment(this.currentDate).add(move, 'day').toISOString();
      this.filteredWorkers = this.getWorkersFilteredByQuadrille();
    }
  };

  /**
   * validContractDate
   * @param worker
   */
  public validContractDate = (worker: any): boolean => {
    if (this.currentDate) {
      const start = moment(worker.startDate).toISOString();
      const end = moment(worker.endDate).toISOString();

      return moment(this.currentDate).isBetween(start, end);
    }

    return false;
  };

  /**
   * goToWorkerTallyList
   * @param worker
   */
  public goToWorkerTallyList = (worker: any) => {
    this.activeWorker = worker;
    this.filteredTallies = this.tallies.filter(item => item.workerId === worker.id);
  };

  createTally() {
    console.log('createTally');
  }

  /**
   * getCostCenterName
   * @param costCenterId
   */
  public getCostCenterName = (costCenterId: number) => {
    const find = this.costCenters.find(item => item.id === costCenterId);
    return find ? find.name : '';
  };

  /**
   * getLaborName
   * @param laborId
   */
  public getLaborName = (laborId: number) => {
    const find = this.labors.find(item => item.id === laborId);
    return find ? find.name : '';
  };

  /**
   * goBack
   */
  public goBack = () => {
    if (this.quadrilles.length > 1) {
      if (this.activeQuadrille && !this.activeWorker) {
        this.activeQuadrille = null;
        this.selectedWorkers = [];
      } else if (this.activeQuadrille && this.activeWorker) {
        this.activeWorker = null;
        this.selectedWorkers = [];
      } else {
        this.router.navigate(['home-page']);
      }
    } else {
      if (this.activeQuadrille && this.activeWorker) {
        this.activeWorker = null;
        this.selectedWorkers = [];
      } else {
        this.router.navigate(['home-page']);
      }
    }
  };
}
