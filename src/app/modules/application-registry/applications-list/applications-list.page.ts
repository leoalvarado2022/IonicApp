import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { OrderSyncService } from 'src/app/services/storage/order-sync/order-sync.service';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';
import { ApplicationListInterface } from '../application-list.interface';
import { ApplicationRegistryService } from '../services/application-registry/application-registry.service';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.page.html',
  styleUrls: ['./applications-list.page.scss'],
})
export class ApplicationsListPage implements OnInit {

  public currentTab: 1 | 2 = 1;
  public readonly toApplyTab = 1;
  public readonly appliedTab = 2;
  
  public filteredToApplyApplications: Array<ApplicationListInterface> = [];
  public filteredAppliedApplications: Array<ApplicationListInterface> = [];  
  public selectedApplication: ApplicationListInterface = null;

  private orderBalanceToApply: Array<ApplicationListInterface> = [];
  private orderBalanceApplied: Array<ApplicationListInterface> = [];

  constructor(
    private applicationRegistryService: ApplicationRegistryService,
    private activatedRoute: ActivatedRoute,
    private loaderService: LoaderService,
    private router: Router,
    private orderSyncService: OrderSyncService
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  /**
   * loadData
   */
  private loadData = (): void => {
    this.loaderService.startLoader();

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.applicationRegistryService.getApplicationList(+id).subscribe((success: any) => {
      const {
        orderBalanceApplied,
        orderBalanceToApply,
        orderChemical,
        orderCostCenter,
        orderHeader,
        orderMachinery
      } = success.data;

      Promise.all([
        this.orderSyncService.setOrderHeader(orderHeader),
        this.orderSyncService.setOrderCostCenter(orderCostCenter),
        this.orderSyncService.setOrderMachinery(orderMachinery),
        this.orderSyncService.setOrderChemical(orderChemical),
        this.orderSyncService.setOrderBalanceToApply(orderBalanceToApply),
        this.orderSyncService.setOrderBalanceApplied(orderBalanceApplied)
      ]).then(() => {
        this.orderBalanceToApply = orderBalanceToApply;
        this.orderBalanceApplied = orderBalanceApplied;        

        this.filteredToApplyApplications = orderBalanceToApply;
        this.filteredAppliedApplications = orderBalanceApplied;

        this.loaderService.stopLoader();
      });
    }, error => {
      this.loaderService.stopLoader();
    });
  }

  /**
   * selectApplication
   * @param application
   */
  public selectApplication = (application: ApplicationListInterface): void => {
    if (application.applicationBalance) {
      if (this.selectedApplication === application) {
        this.selectedApplication = null;
      } else {
        this.selectedApplication = application;
      }
    }
  }

  /**
   * startApplication
   */
  public startApplication = (): void => {
    this.router.navigate(["/home-page/registro_aplicacion/application-start", this.selectedApplication.id]);
  }

  /**
   * editApplication
   * @param application application selected to edit
   */
  public editApplication = (application: ApplicationListInterface, slide: IonItemSliding): void => {
    this.router.navigate(["/home-page/registro_aplicacion/application-end", application.applicationRegistry], { queryParams: { edit: true } });
    slide.close();
  }

}
