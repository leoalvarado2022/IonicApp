import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.page.html',
  styleUrls: ['./contracts-list.page.scss'],
})
export class ContractsListPage implements OnInit {

  private contracts: Array<any> = [];
  public filteredContracts: Array<any> = [];

  constructor() {
    this.filteredContracts = Array.from({length: 10}, () => ({
      id: 1,
      workerName: 'Worker Name',
      companyName: 'Company Name',
      status: 'enviado'
    }));
    this.filteredContracts.push({
      id: 1,
      workerName: 'Worker Name',
      companyName: 'Company Name',
      status: 'pendiente'
    });
  }

  ngOnInit() {

  }

  searchContract(value: any) {

  }

  cancelSearch() {

  }

  reSync($event: CustomEvent) {

  }

  contractForm() {

  }
}
