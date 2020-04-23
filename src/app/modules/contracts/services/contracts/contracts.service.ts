import {Injectable} from '@angular/core';
import {HttpService} from '../../../../shared/services/http/http.service';
import {HttpClient} from '@angular/common/http';
import {ContractListItem} from '../../contract-interfaces';

@Injectable()
export class ContractsService {

  private readonly storePreContractUrl = 'pre-contracts/record';

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
  };

  /**
   * mapPreContractToBeListed
   * @param contract
   */
  public mapPreContractToBeListed = (contract: any): ContractListItem => {
    return {
      id: contract.id,
      workerName: contract.workerName,
      workerLastName: contract.workerLastName,
      workerSurname: contract.workerSurname,
      contractTypeName: contract.contractTypeName
    };
  };

}
