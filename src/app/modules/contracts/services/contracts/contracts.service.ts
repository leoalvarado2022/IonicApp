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
   * @param contractTypes
   */
  public mapPreContractToBeListed = (contract: any, contractTypes: Array<any> = []): ContractListItem => {
    if (contract.hasOwnProperty('workerName')) {
      return {
        id: contract.id,
        workerName: contract.workerName,
        workerLastName: contract.workerLastname,
        workerSurname: contract.workerSurname,
        contractTypeName: contract.contractTypeName,
        afp: contract.afpId,
        companyId: contract.companyId,
        nationality: contract.countryId,
        creatorId: contract.creatorId,
        isapre: contract.isapreId,
        quadrille: contract.quadrilleId,
        contractType: contract.remunerationContractType,
        retired: contract.retired,
        civilStatus: contract.workerCivilStatus,
        workerId: contract.workerId,
        identifier: contract.workerIdentifier
      };
    } else if (contract.hasOwnProperty('name')) {
      const contractType = contractTypes.find(type => type.id === contract.contractType);
      const contractTypeName = contractType ? contractType.name : 'NO SE ENCUENTRA';

      return {
        id: contract.id,
        workerName: contract.name,
        workerLastName: contract.lastName,
        workerSurname: contract.sureName,
        contractTypeName,
        afp: contract.afp,
        civilStatus: contract.civilStatus,
        companyId: contract.companyId,
        contractType: contract.contractType,
        creatorId: contract.creatorId,
        dob: contract.dob,
        gender: contract.gender,
        identifier: contract.identifier,
        isapre: contract.isapre,
        nationality: contract.nationality,
        quadrille: contract.quadrille,
        retired: contract.retired,
        tempId: contract.tempId,
        workerId: contract.workerId
      };
    }
  };

}
