import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {Router} from '@angular/router';
import {ContractsService} from '../services/contracts/contracts.service';
import {ContractListItem} from '../contract-interfaces';
import {HttpService} from '../../../shared/services/http/http.service';
import {Subscription} from 'rxjs';
import { ManualSyncService } from 'src/app/shared/services/manual-sync/manual-sync.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { InfiniteScrollPaginatorService } from 'src/app/shared/services/inifite-scroll-paginator/infinite-scroll-paginator.service';
import { NumericOrderPipe } from 'src/app/shared/pipes/numeric-order/numeric-order.pipe';

@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.page.html',
  styleUrls: ['./contracts-list.page.scss'],
})
export class ContractsListPage implements OnInit, OnDestroy {

  @ViewChild('preContracts') infiniteScroll: IonInfiniteScroll;

  public contracts: Array<ContractListItem> = [];
  public filteredContracts: Array<ContractListItem> = [];
  private firstLoad = false;

  private store$: Subscription;

  constructor(
    private storeService: StoreService,
    private router: Router,
    private contractsService: ContractsService,
    private httpService: HttpService,
    private manualSyncService: ManualSyncService,
    private alertService: AlertService,
    public infiniteScrollPaginatorService: InfiniteScrollPaginatorService,
    private numericOrderPipe: NumericOrderPipe
  ) {

  }

  ngOnInit() {
    this.firstLoad = true;
    this.store$ = this.storeService.stateChanged.subscribe(() => {
      if (!this.firstLoad) {
        this.loadPreContracts();
      }
    });

    this.loadPreContracts();
  }
  
  ngOnDestroy(): void {
    this.store$.unsubscribe();
  }

  /**
   * loadPreContracts
   */
  private loadPreContracts = () => {
    console.log('loadPreContracts');
    this.firstLoad = false;
    const preContracts = this.storeService.getPreContracts();
    const preContractsMapped = preContracts.map(item => this.contractsService.mapPreContractToBeListed(item));

    console.log('preContracts');
    console.log('preContractsMapped');

    this.contracts = this.numericOrderPipe.transform(preContractsMapped, 'id', true);
    this.infiniteScrollPaginatorService.start(this.contracts, 20);
    this.filteredContracts = this.infiniteScrollPaginatorService.getItems();
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
      this.infiniteScrollPaginatorService.reset();
      this.filteredContracts = this.infiniteScrollPaginatorService.getItems();
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.infiniteScrollPaginatorService.reset();
    this.filteredContracts = this.infiniteScrollPaginatorService.getItems();
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

  /**
   * loadData
   */
  public loadData = (event: any) => {
    setTimeout(() => {
      this.infiniteScrollPaginatorService.addItems();
      event.target.complete();
    }, 500);
  }

}
