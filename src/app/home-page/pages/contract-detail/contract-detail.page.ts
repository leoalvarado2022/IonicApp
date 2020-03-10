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
import {StoreService} from '../../../shared/services/store/store.service';

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
  private lat: number;
  private lng: number;
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
    public alertService: AlertService,
    private storeService: StoreService
  ) {

  }

  ngOnInit(): void {
    this.loadUnits();
    const id = this.route.snapshot.paramMap.get('id');


    if (id) {
      this.loadContractDetail(id);
    }

    this.geolocationService$ = this.geolocationService.getCurrentPosition().subscribe(data => {
      this.lat = data.lat;
      this.lng = data.lng;
    });

    this.storeService.stateChanged.subscribe(data => {
      console.log('data', data);
    });
  }

  ngOnDestroy(): void {
    this.geolocationService$.unsubscribe();
  }

  /**
   * loadUnits
   */
  private loadUnits = (): void => {
    this.units = this.storeService.getUnits();
  }

  /**
   * loadContractDetail
   * @param id
   */
  private loadContractDetail = (id: string) => {
    this.loaderService.startLoader();
    this.contractDetailService.getCostCenterDetail(id).subscribe((success: any) => {
      const data = success.data;
      this.storeService.setContractData(data);
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
      return find ? find.code : 'N/A';
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
    const object = {
      lat: this.lat,
      lng: this.lng,
      id_user: user.user.id,
      id_cost_center: this.costCenter.id,
    };
    await this.updateGelocation(object);

    const id = this.route.snapshot.paramMap.get('id');
    await this.loadContractDetail(id);
    const data = await this.syncData();
    await this.syncService.storeSync(data);
  }

  /**
   * @description actualizar localizacion
   * @param data
   */
  public updateGelocation = (data: any) => {
    return new Promise(resolve => {
      this.geolocationClass = true;
      this.loaderService.startLoader('Actualizando posicion');
      this.contractDetailService.updateGelocationCostCenter(data).subscribe(() => {
        this.loaderService.stopLoader();
        this.toastService.successToast('posicion actualizada.');
        this.geolocationClass = false;
        resolve(true);
      }, error => {
        this.loaderService.stopLoader();
        this.toastService.errorToast('No se ha cambiado la localización');
        this.httpService.errorHandler(error);
        this.geolocationClass = false;
        resolve(false);
      });
    });
  }

  /**
   * syncData
   * @param username
   */
  private syncData = () => {
    return new Promise(async resolve => {
      const user = await this.userService.getUserData();
      const username = user.user.username;

      this.syncService.syncData(username).subscribe(async (success: any) => {
        resolve(success.data);
      }, async error => {
        resolve(null);
        this.httpService.errorHandler(error);
      });
    });
  }

}
