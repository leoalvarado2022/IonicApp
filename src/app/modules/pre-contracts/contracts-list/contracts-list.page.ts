import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ContractsService} from '../services/contracts/contracts.service';
import {ContractListItem} from '../contract-interfaces';
import {HttpService} from '../../../shared/services/http/http.service';
import {Subscription} from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { NumericOrderPipe } from 'src/app/shared/pipes/numeric-order/numeric-order.pipe';
import { StorageSyncService } from 'src/app/services/storage/storage-sync/storage-sync.service';
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';
import { StepNames } from 'src/app/services/storage/step-names';

@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.page.html',
  styleUrls: ['./contracts-list.page.scss'],
})
export class ContractsListPage implements OnInit, OnDestroy {

  private contracts: Array<ContractListItem> = [];
  public filteredContracts: Array<ContractListItem> = [];

  private firstLoad = true;
  public isLoading = false;

  private stepper$: Subscription;

  constructor(
    private router: Router,
    private contractsService: ContractsService,
    private httpService: HttpService,
    private alertService: AlertService,
    private numericOrderPipe: NumericOrderPipe,
    private storageSyncService: StorageSyncService,
    private stepperService: StepperService
  ) {

  }

  ngOnInit() {
    this.stepper$ = this.stepperService.getStepper().subscribe(step => {
      if (step === StepNames.EndStoring && !this.firstLoad) {
        this.loadPreContracts();
      }
    });
  }

  ngOnDestroy(): void {
    this.stepper$.unsubscribe();
  }

  ionViewDidEnter() {
    this.loadPreContracts();
  }

  /**
   * loadPreContracts
   */
  private loadPreContracts = () => {
    this.firstLoad = false;
    this.isLoading = true;

    this.storageSyncService.getPreContracts().then( data => {
      const preContractsMapped = data.map(item => this.contractsService.mapPreContractToBeListed(item));
      this.contracts = this.numericOrderPipe.transform(preContractsMapped, 'id', true);
      this.filteredContracts = [...this.contracts];

      this.isLoading = false;
    });
  }

  /**
   * searchContract
   * @param search
   */
  public searchContract = (search: string) => {
    if (search) {
      this.filteredContracts = this.contracts.filter(item => {
        const fullName = `${item.workerName.toLowerCase()} ${item.workerLastName.toLowerCase()} ${item.workerSurname.toLowerCase()}`;
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          fullName.includes(search.toLowerCase()) ||
          item.contractTypeName.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredContracts = [...this.contracts];
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.filteredContracts = [...this.contracts];
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
      this.stepperService.runAllSteps();
    }, error => {
      this.httpService.errorHandler(error);
    });
  }

}
