import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {CostCenter, CostCenterList, HarvestEstimate, Note, ProductContract, ProductContractDetail, QualityDetail, QualityEstimate} from '@primetec/primetec-angular';
import {BehaviorSubject} from 'rxjs';
import {LoaderService} from "../loader/loader.service";

@Injectable()
export class ContractDetailService {

  private readonly getCostCenterUrl = 'costcenter';
  private readonly storeHarvestUrl = 'costcenter/store/harvest';
  private readonly storeQualityUrl = 'costcenter/store/quality';
  private readonly storeNoteUrl = 'costcenter/store/note';

  private costCenterListItem: BehaviorSubject<CostCenterList>;
  private costCenter: BehaviorSubject<CostCenter>;
  private productionContracts: BehaviorSubject<Array<ProductContract>>;
  private productionContractsDetails: BehaviorSubject<Array<ProductContractDetail>>;
  private harvestEstimate: BehaviorSubject<Array<HarvestEstimate>>;
  private qualityEstimate: BehaviorSubject<Array<QualityEstimate>>;
  private qualityEstimateDetail: BehaviorSubject<Array<QualityDetail>>;
  private notes: BehaviorSubject<Array<Note>>;

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
    private loaderService: LoaderService
  ) {
    this.costCenterListItem = new BehaviorSubject<CostCenterList>(null);
    this.costCenter = new BehaviorSubject<CostCenter>(null);
    this.productionContracts = new BehaviorSubject<Array<ProductContract>>([]);
    this.productionContractsDetails = new BehaviorSubject<Array<ProductContractDetail>>([]);
    this.harvestEstimate = new BehaviorSubject<Array<HarvestEstimate>>([]);
    this.qualityEstimate = new BehaviorSubject<Array<QualityEstimate>>([]);
    this.qualityEstimateDetail = new BehaviorSubject<Array<QualityDetail>>([]);
    this.notes = new BehaviorSubject<Array<Note>>([]);
  }

  /**
   * getCostCenterDetail
   * @param id
   */
  public getCostCenterDetail = (id: string) => {
    this.loaderService.startLoader('Cargando centro de costo');
    const url = this.authService.buildUrl(this.getCostCenterUrl, id);
    return this.httpClient.post(url, this.authService.buildBody(), {headers: this.authService.getHeaders()}).subscribe((success: any) => {
      this.loaderService.stopLoader();

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
      this.loaderService.stopLoader();

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
    return this.costCenter.asObservable();
  }

  /**
   * getProductionContracts
   */
  public getProductionContracts = () => {
    return this.productionContracts.asObservable();
  }

  /**
   * getProductionContractsDetails
   */
  public getProductionContractsDetails = () => {
    return this.productionContractsDetails.asObservable();
  }

  /**
   * getHarvestEstimate
   */
  public getHarvestEstimate = () => {
    return this.harvestEstimate.asObservable();
  }

  /**
   * getQualityEstimate
   */
  public getQualityEstimate = () => {
    return this.qualityEstimate.asObservable();
  }

  /**
   * getQualityEstimateDetail
   */
  public getQualityEstimateDetail = () => {
    return this.qualityEstimateDetail.asObservable();
  }

  /**
   * getNotes
   */
  public getNotes = () => {
    return this.notes.asObservable();
  }

  /**
   * setCostCenterListItem
   * @param costCenter
   */
  public setCostCenterListItem = (costCenter: CostCenterList) => {
    this.costCenterListItem.next(costCenter);
  }

  /**
   * getCostCenterListItem
   */
  public getCostCenterListItem = () => {
    return this.costCenterListItem.asObservable();
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
   * storeQuality
   * @param data
   */
  public storeQuality = (data: any) => {
    const url = this.authService.buildUrl(this.storeQualityUrl);
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
