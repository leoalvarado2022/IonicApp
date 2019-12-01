import {Injectable} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {CostCenter, HarvestEstimate, Note, ProductContract, ProductContractDetail, QualityDetail, QualityEstimate} from '@primetec/primetec-angular';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ContractDetailService {

  private readonly getCostCenterUrl = 'costcenter';
  private readonly storeHarvestUrl = 'costcenter/store/harvest';
  private readonly storeNoteUrl = 'costcenter/store/note';

  private costCenter: BehaviorSubject<CostCenter>;
  private productionContracts: BehaviorSubject<Array<ProductContract>>;
  private productionContractsDetails: BehaviorSubject<Array<ProductContractDetail>>;
  private harvestEstimate: BehaviorSubject<Array<HarvestEstimate>>;
  private qualityEstimate: BehaviorSubject<Array<QualityEstimate>>;
  private qualityEstimateDetail: BehaviorSubject<Array<QualityDetail>>;
  private notes: BehaviorSubject<Array<Note>>;

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {
    this.costCenter = new BehaviorSubject<CostCenter>(null);
    this.productionContracts = new BehaviorSubject<Array<ProductContract>>([]);
    this.productionContractsDetails = new BehaviorSubject<Array<ProductContractDetail>>([]);
    this.harvestEstimate = new BehaviorSubject<Array<HarvestEstimate>>([]);
    this.qualityEstimate = new BehaviorSubject<Array<QualityEstimate>>([]);
    this.qualityEstimateDetail = new BehaviorSubject<Array<QualityDetail>>([]);
    this.notes = new BehaviorSubject<Array<Note>>([]);

    console.log('se inicia ContractDetailService');
  }

  /**
   * getCostCenterDetail
   * @param id
   */
  public getCostCenterDetail = (id: string) => {
    const url = this.authService.buildUrl(this.getCostCenterUrl, id);
    return this.httpClient.post(url, this.authService.buildBody(), {headers: this.authService.getHeaders()}).subscribe((success: any) => {
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

      this.costCenter.next(costCenter);
      this.productionContracts.next(productionContracts);
      this.productionContractsDetails.next(productionContractsDetails);
      this.harvestEstimate.next(this.defineArrows(harvestEstimate, 'quantity'));
      this.qualityEstimate.next(this.defineArrows(qualityEstimate, 'exportPercentage'));
      this.qualityEstimateDetail.next(qualityEstimateDetail);
      this.notes.next(notes);

    }, error => {
      this.costCenter.next(null);
      this.productionContracts.next([]);
      this.productionContractsDetails.next([]);
      this.harvestEstimate.next([]);
      this.qualityEstimate.next([]);
      this.qualityEstimateDetail.next([]);
      this.notes.next([]);

      this.authService.errorsHandler(error);
    });
  }

  /**
   *getCostCenter
   */
  public getCostCenter = () => {
    console.log('getCostCenter', this.costCenter.getValue());
    return this.costCenter.asObservable();
  }

  /**
   * getProductionContracts
   */
  public getProductionContracts = () => {
    console.log('productionContracts', this.productionContracts.getValue());
    return this.productionContracts.asObservable();
  }

  /**
   * getProductionContractsDetails
   */
  public getProductionContractsDetails = () => {
    console.log('productionContractsDetails', this.productionContractsDetails.getValue());
    return this.productionContractsDetails.asObservable();
  }

  /**
   * getHarvestEstimate
   */
  public getHarvestEstimate = () => {
    console.log('harvestEstimate', this.harvestEstimate.getValue());
    return this.harvestEstimate.asObservable();
  }

  /**
   * getQualityEstimate
   */
  public getQualityEstimate = () => {
    console.log('qualityEstimate', this.qualityEstimate.getValue());
    return this.qualityEstimate.asObservable();
  }

  /**
   * getQualityEstimateDetail
   */
  public getQualityEstimateDetail = () => {
    console.log('qualityEstimateDetail', this.qualityEstimateDetail.getValue());
    return this.qualityEstimateDetail.asObservable();
  }

  /**
   * getNotes
   */
  public getNotes = () => {
    console.log('notes', this.notes.getValue());
    return this.notes.asObservable();
  }

  /**
   * storeHarvest
   * @param data
   */
  public storeHarvest = (data: any) => {
    const url = this.authService.buildUrl(this.storeHarvestUrl);
    return this.httpClient.post(url, this.authService.buildBody(data), {headers: this.authService.getHeaders()});
  }

  /**
   * storeNote
   * @param data
   */
  public storeNote = (data: any) => {
    const url = this.authService.buildUrl(this.storeNoteUrl);
    return this.httpClient.post(url, this.authService.buildBody({note: data}), {headers: this.authService.getHeaders()});
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

}
