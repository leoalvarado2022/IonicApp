import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {Router} from '@angular/router';
import {ContractsService} from '../services/contracts/contracts.service';
import {ContractListItem} from '../contract-interfaces';
import {HttpService} from '../../../shared/services/http/http.service';
import {Subscription} from 'rxjs';
import { ManualSyncService } from 'src/app/shared/services/manual-sync/manual-sync.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';

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
    private manualSyncService: ManualSyncService,
    private alertService: AlertService
  ) {

  }

  ionViewDidEnter() {
    this.store$ = this.storeService.stateChanged.subscribe(() => {
      this.loadPreContracts();
    });
  }

  ngOnInit() {
    this.loadPreContracts();
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

    this.contracts = [...preContractsMapped];
    this.filteredContracts = [...preContractsMapped];
  }

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
  }

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.filteredContracts = this.contracts;
  }

  /**
   * reSync
   * @param event
   */
  public reSync = (event: any) => {
    this.loadPreContracts();
    event.target.complete();
  }

  /**
   * contractForm
   */
  public contractForm = (id: number = null) => {
    if (id) {
      this.router.navigate(['/home-page/contract-form', id]);
    } else {
      this.router.navigate(['/home-page/contract-form']);
    }
  }

  /**
   * editContractEvent
   * @param data
   */
  public editContractEvent = (data: any) => {
    const {contract, slide} = data;
    slide.close();

    this.contractForm(contract.id);
  }

  /**
   * deleteContract
   * @param data
   */
  public deleteContract = async (data: any): Promise<void> => {
    const {contract, slide} = data;
    slide.close();

    const sayYes = await this.alertService.confirmAlert('Seguro que desea borrar este pre-contrato?');
    if (sayYes) {
      const deleteContract = Object.assign({}, contract, {id: contract.id * -1, retired: contract.retired ? 1 : 0});
      this.storeContract(deleteContract);
    }
  }

  /**
   * storeContract
   * @param data
   */
  private storeContract = (data: any) => {
    const preContracts = [];
    preContracts.push(data);

    this.contractsService.storePreContracts(preContracts).subscribe(() => {

      // SEND TO SYNC
      this.manualSyncService.sync();
    }, error => {
      this.httpService.errorHandler(error);
    });
  }

}
