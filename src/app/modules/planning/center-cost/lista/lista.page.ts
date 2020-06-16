import {Component, OnInit} from '@angular/core';
import {CostCenterList} from '@primetec/primetec-angular';
import {Router} from '@angular/router';
import {StoreService} from '../../../../shared/services/store/store.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public filteredCostCenters: Array<CostCenterList> = [];
  private costCenters: Array<CostCenterList> = [];

  public isLoading = false;

  constructor(
    private router: Router,
    private storeService: StoreService
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
  private loadCostCenters = () => {
    this.isLoading = true;

    const costCenters = this.storeService.getCostCenters();

    this.costCenters = [...costCenters];
    this.filteredCostCenters = [...costCenters];

    this.isLoading = false;
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
    this.storeService.setActiveCostCenter(costCenter);
    this.router.navigate(['home-page/contract-detail', costCenter.id]);
  }

  /**
   * reSync
   * @param event
   */
  public reSync = (event: any) => {
    this.loadCostCenters();
    event.target.complete();
  }

}
