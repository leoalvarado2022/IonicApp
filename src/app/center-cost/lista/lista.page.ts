import {Component, OnInit} from '@angular/core';
import {SyncService} from '../../shared/services/sync/sync.service';
import {CostCenterList} from '@primetec/primetec-angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  private costCenters: CostCenterList[] = [];
  public filteredCostCenters: CostCenterList[] = [];

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
  public loadCostCenters = async () => {
    this.costCenters = await this.syncService.getCostCenters();
    this.filteredCostCenters = this.costCenters;
  }

  /**
   * searchCostCenter
   * @param search
   */
  public searchCostCenter = (search: string) => {
    if (search) {
      this.filteredCostCenters = this.costCenters.filter(item => {
        return (
          item.producerName.toLowerCase().indexOf(search.toLowerCase()) === 0 ||
          item.contractResponsible.toLowerCase().indexOf(search.toLowerCase()) === 0 ||
          item.contractDocumentNumber.toLowerCase().indexOf(search.toLowerCase()) === 0 ||
          item.speciesName.toLowerCase().indexOf(search.toLowerCase()) === 0 ||
          item.varietyName.toLowerCase().indexOf(search.toLowerCase()) === 0
        );
      });
    } else {
      this.filteredCostCenters = this.costCenters;
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.filteredCostCenters = this.costCenters;
  }

  /**
   * reload
   * @param event
   */
  public reload = async (event: any) => {
    await this.loadCostCenters();
    event.target.complete();
  }
}
