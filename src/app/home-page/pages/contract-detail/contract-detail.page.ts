import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContractDetailService} from '../../../shared/services/contract-detail/contract-detail.service';
import {CostCenter, HarvestEstimate, Note, ProductContract, QualityDetail, QualityEstimate, Unit} from '@primetec/primetec-angular';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {Subscription} from 'rxjs';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {GeolocationService} from '../../../shared/services/geolocation/geolocation.service';
import {UserService} from '../../../shared/services/user/user.service';
import {ToastService} from '../../../shared/services/toast/toast.service';
import {AlertService} from '../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.page.html',
  styleUrls: ['./contract-detail.page.scss'],
})
export class ContractDetailPage implements OnInit, OnDestroy {

  public openSelected = false;
  public geolocationClass = false;
  public productionContracts: Array<ProductContract> = [];
  public costCenter: CostCenter = null;
  private units: Array<Unit> = [];
  private qualityEstimateDetail: Array<QualityDetail>;

  private costCenter$: Subscription;
  private productionContracts$: Subscription;
  private qualityEstimateDetail$: Subscription;
  private geolocationService$: Subscription;

  constructor(
    private route: ActivatedRoute,
    public contractDetailService: ContractDetailService,
    private syncService: SyncService,
    private httpService: HttpService,
    private router: Router,
    private loaderService: LoaderService,
    private geolocationService: GeolocationService,
    private userService: UserService,
    private toastService: ToastService,
    public alertService: AlertService
  ) {

  }

  ngOnInit(): void {
    this.costCenter$ = this.contractDetailService.getCostCenter().subscribe(value => {
      this.costCenter = value;
    });

    this.productionContracts$ = this.contractDetailService.getProductionContracts().subscribe(value => {
      this.productionContracts = value;
    });

    this.qualityEstimateDetail$ = this.contractDetailService.getQualityEstimateDetail().subscribe(value => {
      this.qualityEstimateDetail = value;
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.loadContractDetail(id);
      this.loadUnits();
    }
  }

  ngOnDestroy(): void {
    this.costCenter$.unsubscribe();
    this.productionContracts$.unsubscribe();
    this.qualityEstimateDetail$.unsubscribe();
  }

  /**
   * loadUnits
   */
  private loadUnits = async () => {
    this.units = await this.syncService.getUnits();
  }

  /**
   * loadContractDetail
   * @param id
   */
  private loadContractDetail = (id: string) => {
    this.loaderService.startLoader('Cargando detalles...');
    this.contractDetailService.getCostCenterDetail(id).subscribe(success => {
      this.loaderService.stopLoader();
    }, error => {
      this.loaderService.stopLoader();
    });
  }

  /**
   * getTotal
   */
  public getTotal = () => {
    return this.productionContracts.reduce((accumulator, contract) => accumulator + contract.totalQuantity, 0);
  }

  /**
   * showUnitName
   */
  public showUnitName = () => {
    if (this.costCenter) {
      const find = this.units.find(item => item.id === this.costCenter.controlUnit);

      if (find) {
        return find.code;
      }
    }

    return 'N/A';
  }

  /**
   * getItemDetails
   * @param id
   */
  public getItemDetails = (quality: QualityEstimate) => {
    if (quality) {
      return this.qualityEstimateDetail.filter(item => item.qualityEstimate === quality.id);
    }

    return [];
  }

  /**
   * goToList
   * @param note
   */
  public noteListPage = (note: Note = null) => {
    this.router.navigate(['/home-page/notes']);
  }

  /**
   * harvestPage
   * @param item
   */
  public harvestPage = (item: HarvestEstimate) => {
    this.router.navigate(['/home-page/harvest-estimate']);
  }

  /**
   * qualityPage
   * @param item
   */
  public qualityPage = (item: QualityEstimate) => {
    this.router.navigate(['/home-page/quality-estimate']);
  }

  /**
   * @description actualizacion de la geolocation al centro de costo
   */
  public myGeolocation = async () => {
    const alert = await this.alertService.confirmAlert('Desea actualizar la ubicacion del CC de costo con su ubicacion actual?');

    if (!alert) {
      return;
    }

    const user = await this.userService.getUserData();
    this.geolocationService$ = this.geolocationService.getCurrentPosition().subscribe(async (data) => {
      const object = {
        lat: data.lat,
        lng: data.lng,
        id_user: user.user.id,
        id_cost_center: this.costCenter.id,
      };

      this.updateGelocation(object);
    });

    this.geolocationService$.unsubscribe();
  }

  /**
   * @description actualizar localizacion
   * @param data
   */
  public updateGelocation = (data: any) => {
    this.geolocationClass = true;
    this.loaderService.startLoader('Actualizando posicion');
    this.contractDetailService.updateGelocationCostCenter(data).subscribe(async () => {
      await this.syncData();
      this.loaderService.stopLoader();
      this.toastService.successToast('posicion actualizada.');
      this.geolocationClass = false;
    }, error => {
      this.loaderService.stopLoader();
      this.toastService.errorToast('No se ha cambiado la localización');
      this.httpService.errorHandler(error);
      this.geolocationClass = false;
    });
  }

  /**
   * syncData
   * @param username
   */
  private syncData = async () => {

    const user = await this.userService.getUserData();
    const username = user.user.username;

    this.syncService.syncData(username).subscribe(async (success: any) => {
      await this.syncService.storeSync(success.data);
    }, async error => {
      this.httpService.errorHandler(error);
    });
  }

}
