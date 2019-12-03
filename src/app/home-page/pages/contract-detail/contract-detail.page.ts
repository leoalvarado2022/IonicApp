import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ContractDetailService} from '../../../shared/services/contract-detail/contract-detail.service';
import {CostCenter, CostCenterList, HarvestEstimate, Note, ProductContract, ProductContractDetail, QualityDetail, QualityEstimate} from '@primetec/primetec-angular';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {ToastService} from '../../../shared/services/toast/toast.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.page.html',
  styleUrls: ['./contract-detail.page.scss'],
})
export class ContractDetailPage implements OnInit {

  public openSelected = false;
  public selectedGraphics = false;
  public costCenterListItem: CostCenterList;
  public costCenter: CostCenter;
  public productionContracts: Array<ProductContract>;
  public productionContractsDetails: Array<ProductContractDetail>;
  public harvestEstimate: Array<HarvestEstimate>;
  public qualityEstimate: Array<QualityEstimate>;
  public qualityEstimateDetail: Array<QualityDetail>;
  public notes: Array<Note>;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private contractDetailService: ContractDetailService,
    private authService: AuthService,
    private syncService: SyncService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.contractDetailService.getCostCenter().subscribe(value => {
      this.costCenter = value;
    });

    this.contractDetailService.getProductionContracts().subscribe(value => {
      this.productionContracts = value;
    });

    this.contractDetailService.getProductionContractsDetails().subscribe(value => {
      this.productionContractsDetails = value;
    });

    this.contractDetailService.getHarvestEstimate().subscribe(value => {
      this.harvestEstimate = value;
    });

    this.contractDetailService.getQualityEstimate().subscribe(value => {
      this.qualityEstimate = value;
    });

    this.contractDetailService.getQualityEstimateDetail().subscribe(value => {
      this.qualityEstimateDetail = value;
    });

    this.contractDetailService.getNotes().subscribe(value => {
      this.notes = value;
    });

    this.contractDetailService.getNotes().subscribe(value => {
      this.notes = value;
    });

    this.contractDetailService.getCostCenterListItem().subscribe(value => {
      this.costCenterListItem = value;
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadContractDetail(id);
    }
  }

  /**
   * loadContractDetail
   * @param id
   */
  private loadContractDetail = (id: string) => {
    this.contractDetailService.getCostCenterDetail(id);
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

}
