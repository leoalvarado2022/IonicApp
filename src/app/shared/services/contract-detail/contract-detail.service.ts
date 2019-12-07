import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {CostCenter, CostCenterList, HarvestEstimate, Note, ProductContract, ProductContractDetail, QualityDetail, QualityEstimate} from '@primetec/primetec-angular';
import {BehaviorSubject} from 'rxjs';
import {LoaderService} from '../loader/loader.service';
import {HttpService} from "../http/http.service";
import {catchError} from "rxjs/operators";

interface ContractInterface {
  costCenter: CostCenter;
  productionContracts: Array<ProductContract>,
  productionContractsDetails: Array<ProductContractDetail>,
  harvestEstimate: Array<HarvestEstimate>,
  qualityEstimate: Array<QualityEstimate>,
  qualityEstimateDetail: Array<QualityDetail>,
  notes: Array<Note>
}

@Injectable()
export class ContractDetailService {

  private readonly getCostCenterUrl = 'costcenter';
  private readonly storeHarvestUrl = 'costcenter/store/harvest';
  private readonly storeQualityUrl = 'costcenter/store/quality';
  private readonly storeNoteUrl = 'costcenter/store/note';

  private costCenterListItem: BehaviorSubject<CostCenterList> = new BehaviorSubject<CostCenterList>(null);
  private costCenter: BehaviorSubject<CostCenter> = new BehaviorSubject<CostCenter>(null);
  private productionContracts: BehaviorSubject<Array<ProductContract>> = new BehaviorSubject<Array<ProductContract>>([]);
  private productionContractsDetails: BehaviorSubject<Array<ProductContractDetail>> = new BehaviorSubject<Array<ProductContractDetail>>([]);
  private harvestEstimate: BehaviorSubject<Array<HarvestEstimate>> = new BehaviorSubject<Array<HarvestEstimate>>([]);
  private qualityEstimate: BehaviorSubject<Array<QualityEstimate>> = new BehaviorSubject<Array<QualityEstimate>>([]);
  private qualityEstimateDetail: BehaviorSubject<Array<QualityDetail>> = new BehaviorSubject<Array<QualityDetail>>([]);
  private notes: BehaviorSubject<Array<Note>> = new BehaviorSubject<Array<Note>>([]);

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
    private loaderService: LoaderService,
    private httpService: HttpService
  ) {

  }

  /**
   * getCostCenterDetail
   * @param id
   */
  public getCostCenterDetail = async (id: string) => {
    const url = this.httpService.buildUrl(this.getCostCenterUrl, id);
    return this.httpClient.post(url, this.httpService.buildBody(), {headers: this.httpService.getHeaders()}).subscribe((success: any) => {
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

      this.httpService.errorHandler(error);
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
    const url = this.httpService.buildUrl(this.storeHarvestUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  /**
   * storeQuality
   * @param data
   */
  public storeQuality = (data: any) => {
    const url = this.httpService.buildUrl(this.storeQualityUrl);
    return this.httpClient.post(url, this.httpService.buildBody(data), {headers: this.httpService.getHeaders()});
  }

  /**
   * storeNote
   * @param data
   */
  public storeNote = (data: any) => {
    const url = this.httpService.buildUrl(this.storeNoteUrl);
    return this.httpClient.post(url, this.httpService.buildBody({note: data}), {headers: this.httpService.getHeaders()});
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
   * test
   * @param id
   */
  public test(id: string) {
    const url = this.httpService.buildUrl(this.getCostCenterUrl, id);
    return this.httpClient.post(url, this.httpService.buildBody(),
      {headers: this.httpService.getHeaders()})
      .pipe(
        catchError(error => this.httpService.errorHandler(error))
      );
  }

}
