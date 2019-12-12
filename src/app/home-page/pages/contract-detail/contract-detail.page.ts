import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContractDetailService} from '../../../shared/services/contract-detail/contract-detail.service';
import {CostCenter, HarvestEstimate, Note, ProductContract, QualityDetail, QualityEstimate, Unit} from '@primetec/primetec-angular';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {HttpService} from '../../../shared/services/http/http.service';
import {Subscription} from 'rxjs';
import {LoaderService} from '../../../shared/services/loader/loader.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.page.html',
  styleUrls: ['./contract-detail.page.scss'],
})
export class ContractDetailPage implements OnInit, OnDestroy {

  public openSelected = false;
  public productionContracts: Array<ProductContract> = [];
  private costCenter: CostCenter = null;
  private units: Array<Unit> = [];
  private qualityEstimateDetail: Array<QualityDetail>;

  private costCenter$: Subscription;
  private productionContracts$: Subscription;
  private qualityEstimateDetail$: Subscription;

  constructor(
    private route: ActivatedRoute,
    public contractDetailService: ContractDetailService,
    private syncService: SyncService,
    private httpService: HttpService,
    private router: Router,
    private loaderService: LoaderService
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
    this.loaderService.startLoader('Cargando centro de costo');
    this.contractDetailService.getCostCenterDetail(id).subscribe(async success => {
      await this.loaderService.stopLoader();
    }, async error => {
      await this.loaderService.stopLoader();
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
}
