import {Component, OnInit} from '@angular/core';
import {Company} from '@primetec/primetec-angular';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {LoaderService} from '../../../shared/services/loader/loader.service';
import {StoreService} from '../../../shared/services/store/store.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

  public companies: Array<Company> = [];
  public selectedCompany: Company = null;

  constructor(
    private authService: AuthService,
    private loaderService: LoaderService,
    private router: Router,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.loadCompanies();
  }

  /**
   * selectCompany
   * @param company
   */
  public selectCompany = (company: Company) => {
    if (company.id !== this.selectedCompany.id) {
      this.storeService.setActiveCompany(company);
      this.loadCompanies();
      this.router.navigate(['home-page']);
    }
  };

  /**
   * loadCompanies
   */
  private loadCompanies = () => {
    this.loaderService.startLoader('Cargando empresas...');
    const companies = this.storeService.getCompanies();
    const company = this.storeService.getActiveCompany();
    this.companies = [...companies];
    this.selectedCompany = company;
    this.loaderService.stopLoader();
  }

}
