import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ContractsService} from '../services/contracts/contracts.service';
import {ContractListItem} from '../contract-interfaces';

@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.page.html',
  styleUrls: ['./contracts-list.page.scss'],
})
export class ContractsListPage implements OnInit, OnDestroy {

  private contracts: Array<ContractListItem> = [];
  public filteredContracts: Array<ContractListItem> = [];
  private contractTypes: Array<any> = [];
  private store$: Subscription;

  constructor(
    private storeService: StoreService,
    private router: Router,
    private contractsService: ContractsService
  ) {

  }

  ngOnInit() {
    this.loadPreContracts();

    this.store$ = this.storeService.stateChanged.subscribe(data => {

    });
  }

  ngOnDestroy(): void {
    this.store$.unsubscribe();
  }

  /**
   * loadPreContracts
   */
  private loadPreContracts = () => {
    this.contractTypes = this.storeService.getContractTypes();
    const preContracts = this.storeService.getPreContracts();
    const preContractsMapped = preContracts.map(item => this.contractsService.mapPreContractToBeListed(item, this.contractTypes));

    const preContractToRecord = this.storeService.getPreContractsToRecord();

    if (preContractToRecord.length > 0) {
      const mapped = preContractToRecord.map(item => this.contractsService.mapPreContractToBeListed(item, this.contractTypes));
      this.contracts = [...mapped, ...preContractsMapped];
      this.filteredContracts = [...mapped, ...preContractsMapped];
    } else {
      this.contracts = [...preContractsMapped];
      this.filteredContracts = [...preContractsMapped];
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
          item.workerLastName.toLowerCase().includes(search.toLowerCase()) ||
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

  public editContractEvent(contract: any) {
    // console.log('editContractEvent', contract);
  }

  /**
   * deleteContract
   * @param contract
   */
  public deleteContract = (contract: any): void => {
    /*
    const deleteContract = Object.assign(contract, {id: contract.id * -1});
    this.storeService.addPreContract(deleteContract);
    this.loadPreContracts();
    */
  };
}
