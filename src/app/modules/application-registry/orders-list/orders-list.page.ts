import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { OrderListInterface } from '../order-list.interface';
import { ApplicationRegistryService } from '../services/application-registry/application-registry.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.page.html',
  styleUrls: ['./orders-list.page.scss'],
})
export class OrdersListPage implements OnInit {

  private ordersList: Array<OrderListInterface> = [];
  public ordersListFiltered: Array<OrderListInterface> = [];

  constructor(
    private applicationRegistryService: ApplicationRegistryService,
    private storeService: StoreService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  /**
   * loadData
   */
  private loadData = (): void => {
    const activeCompany = this.storeService.getActiveCompany();
    const user = this.storeService.getUser();

    this.applicationRegistryService.getOrderList(activeCompany.id, user.id).subscribe(success => {
      this.ordersList = success["data"];
      this.ordersListFiltered = success["data"];
    }, error => {

    });
  }

  /**
   * 
   * @param value 
   */
  public fillWithZeros = (value: string): string => {
    const pad = "000";
    return (pad + value).slice(-pad.length);
  }

  /**
   * formatDate
   * @param date 
   */
  public formatDate = (date: string): string => {
    return moment.utc(this.cleanDate(date), 'YYYY-MM-DD').format("DD/MM/YYYY");
  }

  /**
   * cleanDate
   * @param date
   */
  private cleanDate = (date: string) => {
    if (date.includes('T')) {
      return date.split('T')[0];
    }

    return date;
  }

  /**
   * reload
   * @param event 
   */
  public reload = (event: any) => {
    this.ordersList = [];
    this.loadData();
    event.target.complete();
  }

  /**
   * searchOrder
   * @param search 
   */
  public searchOrder = (search: string): void => {
    if (search) {
      this.ordersListFiltered = this.ordersList.filter(item => {
        return (
          item.id.toString().includes(search.toLowerCase()) ||
          item.companyId.toString().includes(search.toLowerCase()) ||
          item.number.toString().includes(search.toLowerCase()) ||
          item.date.toLowerCase().includes(search.toLowerCase()) ||
          item.reference.toLowerCase().includes(search.toLowerCase()) ||
          item.responsibleName.toLowerCase().includes(search.toLowerCase()) ||
          (item.operatorId && item.operatorId.toString().includes(search.toLowerCase()))
        );
      });
    } else {
      this.ordersListFiltered = [...this.ordersList];
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = (): void => {
    this.ordersListFiltered = [...this.ordersList];
  }

  /**
   * goToApplications
   * @param orderId 
   */
  public goToApplications = (orderId: number) => {
    this.router.navigate(['/home-page/registro_aplicacion/applications', orderId]);
  }

}
