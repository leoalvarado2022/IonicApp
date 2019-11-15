import {Component, OnInit} from '@angular/core';
import {SyncService} from '../shared/services/sync/sync.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

  public companies: any = [];

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
  public selectCompany = (company: any) => {
    console.log(company);
  }

}
