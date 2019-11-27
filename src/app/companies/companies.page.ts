import {Component, OnInit} from '@angular/core';
import {SyncService} from '../shared/services/sync/sync.service';
import {Company} from '@primetec/primetec-angular';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';
import {SharedEventsService} from "../shared/services/shared-events/shared-events.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

  public companies: Company[] = [];
  public selectedCompany: Company = null;

  constructor(
    private syncService: SyncService,
    private authService: AuthService,
    private router: Router,
    private sharedEventsService: SharedEventsService
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
    this.selectedCompany = this.authService.getCompany();
  }

  /**
   * selectCompany
   * @param company
   */
  public selectCompany = (company: Company) => {
    if (company.id !== this.selectedCompany.id) {
      this.authService.setCompany(company);
      this.loadCompanies();
      this.sharedEventsService.companyChanged();
      this.router.navigate(['home-page']);
    }
  }

}
