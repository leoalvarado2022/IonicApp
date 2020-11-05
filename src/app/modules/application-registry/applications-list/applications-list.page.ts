import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { ApplicationListInterface } from '../application-list.interface';
import { ApplicationRegistryService } from '../services/application-registry/application-registry.service';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.page.html',
  styleUrls: ['./applications-list.page.scss'],
})
export class ApplicationsListPage implements OnInit {

  private orderHeader: any;
  private orderMachinery: Array<any> = [];
  private orderCostCenter: Array<any> = [];
  private orderChemical: Array<any> = [];
  private orderBalanceToApply: Array<ApplicationListInterface> = [];
  private orderBalanceApplied: Array<ApplicationListInterface> = [];

  public filteredOrders: Array<ApplicationListInterface> = [];

  constructor(
    private applicationRegistryService: ApplicationRegistryService,
    private storeService: StoreService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  /**
   * loadData
   */
  private loadData = () => {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.applicationRegistryService.getApplicationList(+id).subscribe(success => {
      const {
        orderBalanceApplied,
        orderBalanceToApply,
        orderChemical,
        orderCostCenter,
        orderHeader,
        orderMachinery
      } = success["data"];

      this.orderHeader = orderHeader;
      this.orderChemical = orderChemical;
      this.orderCostCenter = orderCostCenter;
      this.orderMachinery = orderMachinery;
      this.orderBalanceApplied = orderBalanceApplied;
      this.orderBalanceToApply = orderBalanceToApply;

      this.filteredOrders = [...this.orderBalanceToApply, ...this.orderBalanceApplied];
    }, error => {

    });
  }

}

