import {Component, OnInit} from '@angular/core';
import {SyncService} from '../shared/services/sync/sync.service';
import {Company} from '@primetec/primetec-angular';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

  public companies: Company[] = [];

  constructor(
    private syncService: SyncService
  ) {

  }

  ngOnInit() {
    this.loadCompanies();
  }

  /**
   * loadCompanies
   */
  private loadCompanies = async () => {
    this.companies = await this.syncService.getCompanies();
  }

  /**
   * selectCompany
   * @param company
   */
  public selectCompany = (company: Company) => {
    console.log(company);
  }

}
