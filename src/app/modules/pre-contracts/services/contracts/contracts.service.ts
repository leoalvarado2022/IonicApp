import {Injectable} from '@angular/core';
import {HttpService} from '../../../../shared/services/http/http.service';
import {HttpClient} from '@angular/common/http';
import {ContractListItem} from '../../contract-interfaces';

@Injectable()
export class ContractsService {

  private readonly storePreContractUrl = 'pre-contracts/record';
  private readonly checkWorkerUrl = 'pre-contracts/check-worker';

  constructor(
    private httpService: HttpService,
    private httpClient: HttpClient
  ) {

  }

  /**
   * storePreContracts
   * @param preContracts
   */
  public storePreContracts = (preContracts: Array<any>) => {
    const url = this.httpService.buildUrl(this.storePreContractUrl);
    return this.httpClient.post(url, this.httpService.buildBody({preContracts}), {headers: this.httpService.getHeaders()});
  }

  /**
   * mapPreContractToBeListed
   * @param contract
   */
  public mapPreContractToBeListed = (contract: any): ContractListItem => {
    console.log('contract ::: ', contract);
    return {
      id: contract.id,
      workerId: contract.workerId,
      workerName: contract.workerName,
      workerLastName: contract.workerLastName,
      workerSurname: contract.workerSurname,
      contractTypeName: contract.contractTypeName,
      contractorId: contract.contractorId,
      contractorName: contract.contractorName
    };
  }

  /**
   * checkWorker
   * @param identifier
   */
  public checkWorker = (identifier: string) => {
    const url = this.httpService.buildUrl(this.checkWorkerUrl);
    return this.httpClient.post(url, this.httpService.buildBody({identifier}), {headers: this.httpService.getHeaders()});
  }

}
