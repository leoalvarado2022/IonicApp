import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContractDetailService} from '../../../shared/services/contract-detail/contract-detail.service';
import {CostCenter, CostCenterList, HarvestEstimate, Note, ProductContract, ProductContractDetail, QualityDetail, QualityEstimate, Unit} from '@primetec/primetec-angular';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {HttpService} from '../../../shared/services/http/http.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.page.html',
  styleUrls: ['./contract-detail.page.scss'],
})
export class ContractDetailPage implements OnInit {

  public openSelected = false;
  public selectedGraphics = false;
  public costCenterListItem: CostCenterList = null;
  public costCenter: CostCenter = null;
  public productionContracts: Array<ProductContract> = [];
  public productionContractsDetails: Array<ProductContractDetail> = [];
  public harvestEstimate: Array<HarvestEstimate> = [];
  public qualityEstimate: Array<QualityEstimate> = [];
  public qualityEstimateDetail: Array<QualityDetail> = [];
  public notes: Array<Note> = [];
  private units: Array<Unit> = [];

  constructor(
    private route: ActivatedRoute,
    private contractDetailService: ContractDetailService,
    private syncService: SyncService,
    private httpService: HttpService,
    private router: Router
  ) {
    this.contractDetailService.getCostCenterListItem().subscribe(value => {
      this.costCenterListItem = value;
    });

    this.contractDetailService.getCostCenter().subscribe(value => {
      this.costCenter = value;
    });

    this.contractDetailService.getProductionContracts().subscribe(value => {
      this.productionContracts = value;
    });

    this.contractDetailService.getHarvestEstimate().subscribe(value => {
      this.harvestEstimate = value;
    });

    this.contractDetailService.getQualityEstimate().subscribe(value => {
      this.qualityEstimate = value;
    });

    this.contractDetailService.getNotes().subscribe(value => {
      this.notes = value;
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.loadContractDetail(id);
      this.loadUnits();
    }
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
    this.contractDetailService.getCostCenterDetail(id);
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
  public qualityPage = (item: QualityDetail) => {
    this.router.navigate(['/home-page/quality-estimate']);
  }
}
