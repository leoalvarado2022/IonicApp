import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.page.html',
  styleUrls: ['./contracts-list.page.scss'],
})
export class ContractsListPage implements OnInit {

  private contracts: Array<any> = [];
  public filteredContracts: Array<any> = [];

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.loadPreContracts();
  }

  /**
   * loadPreContracts
   */
  private loadPreContracts = () => {
    const preContracts = this.storeService.getPreContracts();
    this.contracts = preContracts;
    this.filteredContracts = preContracts;
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
          item.workerLastname.toLowerCase().includes(search.toLowerCase()) ||
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

  public reSync = (event: any) => {
    this.contracts = [];
    this.filteredContracts = [];
    this.loadPreContracts();
    event.target.complete();
  }

  /**
   * contractForm
   */
  public contractForm = () => {
    this.router.navigate(['contract-form']);
  }

}
