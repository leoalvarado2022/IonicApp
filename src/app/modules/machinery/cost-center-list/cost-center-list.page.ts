import { Component, OnInit } from '@angular/core';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cost-center-list',
  templateUrl: './cost-center-list.page.html',
  styleUrls: ['./cost-center-list.page.scss'],
})
export class CostCenterListPage implements OnInit {

  private costCenters: Array<any> = [];
  public filteredCostCenters: Array<any> = [];

  constructor(
    private storageSyncService: StorageSyncService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  private loadData = () => {
    this.storageSyncService.getMachineryTypeCostCenters().then( (costCenters: Array<any>) =>  {
      this.costCenters = costCenters;
      this.filteredCostCenters = costCenters;
    });
  }

  /**
   * reload
   * @param event
   */
  public reload = (event: any) => {
    this.loadData();
    event.target.complete();
  }

  /**
   * searchCostCenter
   */
  public searchCostCenter = (search: string): void => {
    if (search) {
      this.filteredCostCenters = this.costCenters.filter(item => {
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          item.code.toLowerCase().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredCostCenters = [...this.costCenters];
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = (): void => {
    this.filteredCostCenters = [...this.costCenters];
  }

  /**
   * goToMachinery
   */
  public goToMachinery = (costCenterId: number) => {
    this.router.navigate(['/home-page/uso_maquinaria/machinery', costCenterId]);
  }

}
