import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ContractDetailService} from './services/contract-detail/contract-detail.service';
import {CostCenter, CostCenterList, HarvestEstimate, Note, ProductContract, ProductContractDetail, QualityDetail, QualityEstimate} from '@primetec/primetec-angular';
import {AuthService} from '../../../services/auth/auth.service';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {LoaderService} from '../../../services/loader/loader.service';
import {ToastService} from '../../../services/toast/toast.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.page.html',
  styleUrls: ['./contract-detail.page.scss'],
})
export class ContractDetailPage implements OnInit {

  public openSelected = false;
  public selectedGraphics = false;
  public costCenterListItem: CostCenterList = null;
  public costCenter: CostCenter;
  public productionContracts: Array<ProductContract>;
  public productionContractsDetails: Array<ProductContractDetail> = [];
  public harvestEstimate: Array<HarvestEstimate> = [];
  public qualityEstimate: Array<QualityEstimate> = [];
  public qualityEstimateDetail: Array<QualityDetail> = [];
  public notes: Array<Note> = [];

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private contractDetailService: ContractDetailService,
    private authService: AuthService,
    private syncService: SyncService,
    private loaderService: LoaderService,
    private toastService: ToastService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.costCenter = null;
    this.productionContracts = [];
    this.productionContractsDetails = [];
    this.harvestEstimate = [];
    this.qualityEstimate = []
    this.qualityEstimateDetail = [];
    this.notes = [];

    this.unsetStorage();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadContractDetail(id);
      this.loadCostCenter(id);
    }
  }

  /**
   * loadCostCenters
   */
  public loadCostCenter = async (id: string) => {
    const centers = await this.syncService.getCostCenters();
    this.costCenterListItem = centers.find(item => item.id === +id);
  }

  /**
   * loadContractDetail
   * @param id
   */
  private loadContractDetail = (id: string) => {
    this.loaderService.showLoader('Cargando...');
    this.contractDetailService.getCostCenter(id).subscribe((success: any) => {
      const data = success.data;
      const {
        costCenter,
        productionContracts,
        productionContractsDetails,
        harvestEstimate,
        qualityEstimate,
        qualityEstimateDetail,
        notes
      } = data;

      this.costCenter = costCenter;
      this.productionContracts = productionContracts;
      this.productionContractsDetails = productionContractsDetails;
      this.harvestEstimate = this.defineArrows(harvestEstimate, 'quantity');
      this.qualityEstimate = this.defineArrows(qualityEstimate, 'exportPercentage');
      this.qualityEstimateDetail = qualityEstimateDetail;
      this.notes = notes;
      this.setStorage();

      this.loaderService.hideLoader();
    }, error => {
      this.loaderService.hideLoader();
      const msg = this.authService.errorsHandler(error);
      this.toastService.warningToast(msg);
      this.router.navigate(['home-page']);
    });
  }

  /**
   * abrir el panel header
   */
  openCloseSelected() {
    this.openSelected = !this.openSelected;
  }

  /**
   * getTotal
   */
  public getTotal = () => {
    return this.productionContracts.reduce((accumulator, contract) => accumulator + contract.totalQuantity, 0);
  }

  /**
   * defineArrows
   * @param data
   * @param field
   */
  private defineArrows = (data: Array<any> = [], field: string) => {
    if (data.length > 0) {
      const mappedData = data.map((item, index, arr) => {
        if (arr.length === 1) {
          return Object.assign({}, item, {
            arrow: 'remove',
            color: 'default'
          });
        } else if (arr.length > 1) {
          const limit = arr.length - 1;

          if (index < limit) {
            return Object.assign({}, item, {
              arrow: arr[index][field] > arr[index + 1][field] ? 'arrow-round-up' : 'arrow-round-down',
              color: arr[index][field] > arr[index + 1][field] ? 'primary' : 'danger'
            });
          } else {
            return Object.assign({}, item, {
              arrow: 'remove',
              color: 'default'
            });
          }
        }
      });

      return mappedData;
    }

    return data;
  }

  /**
   * setStorage
   */
  private setStorage = () => {
    localStorage.setItem('harvestEstimate', JSON.stringify(this.harvestEstimate));
    localStorage.setItem('qualityEstimate', JSON.stringify(this.qualityEstimate));
    localStorage.setItem('qualityEstimateDetail', JSON.stringify(this.qualityEstimateDetail));
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  /**
   * unsetStorage
   */
  private unsetStorage = () => {
    localStorage.removeItem('harvestEstimate');
    localStorage.removeItem('qualityEstimate');
    localStorage.removeItem('notes');
  }

}
