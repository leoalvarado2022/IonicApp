import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {Router} from '@angular/router';
import {ContractsService} from '../services/contracts/contracts.service';
import {ContractListItem} from '../contract-interfaces';
import {HttpService} from '../../../shared/services/http/http.service';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.page.html',
  styleUrls: ['./contracts-list.page.scss'],
})
export class ContractsListPage implements OnInit, OnDestroy {

  private contracts: Array<ContractListItem> = [];
  public filteredContracts: Array<ContractListItem> = [];
  private store$: Subscription;

  constructor(
    private storeService: StoreService,
    private router: Router,
    private contractsService: ContractsService,
    private httpService: HttpService,
    private syncService: SyncService,
  ) {

  }

  ngOnInit() {
    this.store$ = this.storeService.stateChanged.subscribe(data => {
      this.loadPreContracts();
    });

    // this.loadPreContracts();
  }

  ngOnDestroy(): void {
    this.store$.unsubscribe();
  }

  /**
   * loadPreContracts
   */
  private loadPreContracts = () => {
    const preContracts = this.storeService.getPreContracts();
    const preContractsMapped = preContracts.map(item => this.contractsService.mapPreContractToBeListed(item));

    this.contracts = [];
    this.filteredContracts = [];
    this.contracts = preContractsMapped;
    this.filteredContracts = preContractsMapped;
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
  public contractForm = (id: number = null) => {
    if (id) {
      this.router.navigate(['/home-page/contract-form', id]);
    } else {
      this.router.navigate(['/home-page/contract-form']);
    }
  };

  /**
   * editContractEvent
   * @param contract
   */
  public editContractEvent = (contract: any) => {
    this.contractForm(contract.id);
  };

  /**
   * deleteContract
   * @param contract
   */
  public deleteContract = (contract: any): void => {
    const deleteContract = Object.assign({}, contract, {id: contract.id * -1, retired: contract.retired ? 1 : 0});
    this.storeContract(deleteContract);
  };

  /**
   * storeContract
   * @param data
   */
  private storeContract = (data: any) => {
    const preContracts = [];
    preContracts.push(data);

    this.contractsService.storePreContracts(preContracts).subscribe(success => {
      this.syncData();
    }, error => {
      this.httpService.errorHandler(error);
    });
  };

  /**
   * syncData
   */
  private syncData = () => {
    const userData = this.storeService.getUser();
    const username = userData.username;
    const activeConnection = this.storeService.getActiveConnection();

    this.syncService.syncData(username, activeConnection.superuser ? 1 : 0).subscribe((success: any) => {
      this.storeService.setSyncedData(success.data);
      this.loadPreContracts();
    }, error => {
      this.httpService.errorHandler(error);
    });
  };
}
