import {Component, OnInit} from '@angular/core';
import {SyncService} from '../../../../shared/services/sync/sync.service';
import {CostCenterList} from '@primetec/primetec-angular';
import {ContractDetailService} from '../../../../shared/services/contract-detail/contract-detail.service';
import {Router} from '@angular/router';
import {LoaderService} from "../../../../shared/services/loader/loader.service";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public filteredCostCenters: Array<CostCenterList> = [];
  private costCenters: Array<CostCenterList> = [];

  constructor(
    private syncService: SyncService,
    private contractDetailService: ContractDetailService,
    private router: Router,
    private loaderService: LoaderService
  ) {

  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.loadCostCenters();
  }

  /**
   * loadCostCenters
   */
  public loadCostCenters = async () => {
    this.loaderService.startLoader('Cargando centros de costo...');
    this.costCenters = [];
    this.filteredCostCenters = [];
    this.costCenters = await this.syncService.getCostCenters();
    this.filteredCostCenters = [...this.costCenters];
    this.loaderService.stopLoader();
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

  /**
   * costCenterSelected
   * @param costCenter
   */
  public costCenterSelected = (costCenter: CostCenterList) => {
    this.contractDetailService.setCostCenterListItem(costCenter);
    this.router.navigate(['home-page/contract-detail', costCenter.id]);
  }
}
