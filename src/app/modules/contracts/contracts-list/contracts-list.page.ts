import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.page.html',
  styleUrls: ['./contracts-list.page.scss'],
})
export class ContractsListPage implements OnInit, OnDestroy {

  private contracts: Array<any> = [];
  public filteredContracts: Array<any> = [];
  private store$: Subscription;

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.store$ = this.storeService.stateChanged.subscribe(data => {
      this.loadPreContracts();
    });
  }

  ngOnDestroy(): void {
    this.store$.unsubscribe();
  }

  /**
   * loadPreContracts
   */
  private loadPreContracts = () => {
    const preContracts = this.storeService.getPreContracts();
    const preContractToRecord = this.storeService.getPreContractsToRecord();
    const contractTypes = this.storeService.getContractTypes();

    if (preContractToRecord.length > 0) {
      const mapped = preContractToRecord.map(item => ({
          id: item.id,
          companyId: item.companyId,
          workerId: item.workerId,
          workerIdentifier: item.identifier,
          workerName: item.name,
          workerLastname: item.lastName,
          workerSurname: item.sureName,
          workerCivilStatus: item.civilStatus,
          countryId: item.nationality,
          retired: item.retired,
          quadrilleId: item.quadrille,
          creatorId: 0,
          afpId: item.afp,
          isapreId: item.retired,
          remunerationContractType: item.contractType,
          contractTypeName: contractTypes.find(type => type.id === item.contractType).name || 'NO SE ENCUENTRA'
        })
      );

      this.contracts = [...preContracts, ...mapped];
      this.filteredContracts = [...preContracts, ...mapped];
    } else {
      this.contracts = preContracts;
      this.filteredContracts = preContracts;
    }
  };

  /**
   * searchContract
   * @param search
   */
  public searchContract = (search: string) => {
    if (search) {
      this.filteredContracts = this.contracts.filter(item => {
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          item.workerName.toLowerCase().includes(search.toLowerCase()) ||
          item.workerLastname.toLowerCase().includes(search.toLowerCase()) ||
          item.workerSurname.toLowerCase().includes(search.toLowerCase()) ||
          item.contractTypeName.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredContracts = this.contracts;
    }
  };

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.filteredContracts = this.contracts;
  };

  /**
   * reSync
   * @param event
   */
  public reSync = (event: any) => {
    this.contracts = [];
    this.filteredContracts = [];
    this.loadPreContracts();
    event.target.complete();
  };

  /**
   * contractForm
   */
  public contractForm = () => {
    this.router.navigate(['/home-page/contract-form']);
  };

}
