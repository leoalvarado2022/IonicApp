import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { map, switchMap } from 'rxjs/operators';
import { OrderSyncService } from 'src/app/services/storage/order-sync/order-sync.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
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
    private orderSyncService: OrderSyncService,
    private toastService: ToastService,
    private alertService: AlertService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  ionViewWillEnter() {
    this.orderSyncService.setApplicationLocations([]).then();
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
        this.orderSyncService.setOrderBalanceApplied(orderBalanceApplied),
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
    slide.close();
    this.router.navigate(["/home-page/registro_aplicacion/application-end", application.applicationRegistry], { queryParams: { edit: true } });
  }

  /**
   * deleteApplication
   */
  public deleteApplication = async (application: ApplicationListInterface, slide: IonItemSliding) => {
    const yes = await this.alertService.confirmAlert('Seguro que quieres borrar esta applicacion?');
    const user = this.storeService.getUser();
    slide.close();

    if (yes) {
      this.applicationRegistryService.getApplication(application.applicationRegistry.toString()).pipe(
        map(data => data["data"]),
        switchMap((data: any) => {
          const { applicationHeader, application, chemicals, locations } = data;
          const deleteObj = Object.assign({}, application, { id: (application.id * -1) });
          return this.applicationRegistryService.deleteApplication(applicationHeader, deleteObj, user.id)
        })
      ).subscribe(success => {
        this.loadData();
      }, error => {
        this.toastService.errorToast('ocurrio un error al borrar la aplicacion');
      });
    }
  }

  /**
   * searchApplication
   * @param search text to search
   */
  public searchApplication = (search: string): void => {
    if (search) {
      if (this.currentTab === this.toApplyTab) {
        this.filteredToApplyApplications = this.orderBalanceToApply.filter(item => {
          return (
            item.costCenterCode.toLowerCase().includes(search.toLowerCase()) ||
            item.costCenterName.toLowerCase().includes(search.toLowerCase()) ||
            item.costCenterMachineryName.toLowerCase().includes(search.toLowerCase()) ||
            item.applicationBalance.toString().includes(search.toLowerCase())
          );
        });
      }

      if (this.currentTab === this.appliedTab) {
        this.filteredAppliedApplications = this.orderBalanceApplied.filter(item => {
          return (
            item.costCenterCode.toLowerCase().includes(search.toLowerCase()) ||
            item.costCenterName.toLowerCase().includes(search.toLowerCase()) ||
            item.hectaresQuantity.toString().includes(search.toLowerCase()) ||
            item.litersQuantity.toString().includes(search.toLowerCase())
          );
        });
      }
    } else {
      this.filteredToApplyApplications = [...this.orderBalanceToApply];
      this.filteredAppliedApplications = [...this.orderBalanceApplied];
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = (): void => {
    this.filteredToApplyApplications = [...this.orderBalanceToApply];
    this.filteredAppliedApplications = [...this.orderBalanceApplied];
  }

  /**
   * reload
   * @param event reload
   */
  public reload = (event: any) => {
    this.loadData();
    event.target.complete();
  }

}
