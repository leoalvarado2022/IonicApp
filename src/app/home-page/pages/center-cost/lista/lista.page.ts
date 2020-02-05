import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SyncService} from '../../../../shared/services/sync/sync.service';
import {CostCenterList} from '@primetec/primetec-angular';
import {ContractDetailService} from '../../../../shared/services/contract-detail/contract-detail.service';
import {Router} from '@angular/router';
import {LoaderService} from '../../../../shared/services/loader/loader.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit, AfterViewInit {

  public filteredCostCenters: Array<CostCenterList> = [];
  private costCenters: Array<CostCenterList> = [];

  constructor(
    private syncService: SyncService,
    private contractDetailService: ContractDetailService,
    private loaderService: LoaderService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.loadCostCenters();
  }

  /**
   * loadCostCenters
   */
  public loadCostCenters = async () => {
    this.loaderService.startLoader();
    const costCenters = await this.syncService.getCostCenters();

    if (costCenters) {
      this.costCenters = [...costCenters];
      this.filteredCostCenters = [...costCenters];
    } else {
      this.costCenters = [];
      this.filteredCostCenters = [];
    }

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
