import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {Quadrille} from '@primetec/primetec-angular';
import * as moment from 'moment';

@Component({
  selector: 'app-tally-list',
  templateUrl: './tally-list.page.html',
  styleUrls: ['./tally-list.page.scss'],
})
export class TallyListPage implements OnInit {

  private workers: Array<any> = [];

  public quadrilles: Array<Quadrille> = [];
  public filteredQuadrilles: Array<Quadrille> = [];
  public filteredWorkers: Array<any> = [];
  public activeQuadrille: Quadrille = null;
  public selectedWorkers: Array<any> = [];

  public readonly dateFormat = 'DD/MM/YYYY';
  public readonly maxDate = '2030';
  public currentDate = moment(moment.utc(new Date())).local().startOf('day').toISOString();

  constructor(
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  /**
   * loadData
   */
  private loadData = () => {
    const quadrilles = this.storeService.getQuadrilles();
    this.quadrilles = quadrilles;
    this.filteredQuadrilles = quadrilles;
    this.workers = this.storeService.getWorkers();
    this.filteredWorkers = this.workers;
    this.activeQuadrille = null;


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
   * searchTally
   * @param search
   */
  public searchTally = (search: string) => {
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

}
