import {Component, OnInit} from '@angular/core';
import {SyncService} from '../../shared/services/sync/sync.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  private costCenters: any[] = [];

  constructor(
    private syncService: SyncService
  ) {

  }

  ngOnInit() {
    this.loadCostCenters();
  }

  /**
   * loadCostCenters
   */
  private loadCostCenters = async () => {
    this.costCenters = await this.syncService.getCostCenters();
    console.log(this.costCenters);
  }

}
