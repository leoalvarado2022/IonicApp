import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../shared/services/store/store.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit, OnDestroy {

  numberTicket: number = 0;
  private store$: Subscription;

  constructor(private storeService: StoreService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    this.store$.unsubscribe();
  }

  ngOnInit() {
    this.store$ = this.storeService.stateChanged.subscribe(data => {
      this.numberTicket = this.storeService.getTotalTicket();
    });
  }

  /**
   * @description activa el number ticket
   * @param tab
   */
  activeNumberTicket(tab: string) {
    const url = this.router.url.split('/');

    return tab === url[3];
  }

  change(event: any) {
    this.numberTicket = 0;
    console.log(event);
  }

}
