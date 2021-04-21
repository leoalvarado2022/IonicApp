import { Component, OnInit } from '@angular/core';
import { Company, Connection } from '@primetec/primetec-angular';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { LoaderService } from '../../shared/services/loader/loader.service';
import { StoreService } from '../../shared/services/store/store.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { of } from 'rxjs';

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
    private storeService: StoreService,
    private toastService: ToastService
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

      const connection = this.storeService.getActiveConnection();
      const user = this.storeService.getUser();

      this.authService.companyChange({ connection: connection.token, company: company.id, loggedUser: user.id })
        .pipe(
          switchMap(() => this.authService.checkToken()),
          map(response => response["data"]),
          catchError(error => {
            console.log('error', error);
            this.toastService.errorToast("No se pudo cambiar de empresa");
            return of(null);
          })
        ).subscribe((connections: Array<Connection>) => {
          this.storeService.setUserConnections(connections);
          this.storeService.setActiveCompany(company);

          this.loadCompanies();
          this.router.navigate(['home-page']);
        });
    }
  }

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
