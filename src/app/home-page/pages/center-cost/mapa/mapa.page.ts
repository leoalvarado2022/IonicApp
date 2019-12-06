import {Component, OnInit} from '@angular/core';
import {CostCenterList} from '@primetec/primetec-angular';
import {SyncService} from '../../../../shared/services/sync/sync.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  public readonly lat = -33.447487;
  public readonly lng = -70.673676;

  public filteredCostCenters: CostCenterList[] = [];
  private costCenters: CostCenterList[] = [];

  constructor(private syncService: SyncService) {

  }

  ngOnInit() {
    this.loadCostCenters();
  }

  /**
   * loadCostCenters
   */
  public loadCostCenters = async () => {
    this.costCenters = [];
    this.filteredCostCenters = [];
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
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.producerName.toLowerCase().includes(search.toLowerCase()) ||
          item.contractResponsible.toLowerCase().includes(search.toLowerCase()) ||
          item.contractDocumentNumber.toLowerCase().includes(search.toLowerCase()) ||
          item.speciesName.toLowerCase().includes(search.toLowerCase()) ||
          item.varietyName.toLowerCase().includes(search.toLowerCase())
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


}
