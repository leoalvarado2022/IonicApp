import { Component, OnInit, OnDestroy } from '@angular/core';
import { NetworkService } from '../../services/network/network.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-check-connection',
  templateUrl: './check-connection.component.html',
  styleUrls: ['./check-connection.component.scss'],
})
export class CheckConnectionComponent implements OnInit, OnDestroy {

  public globeColor: 'default' | 'success' | 'danger'  = 'default';
  
  private isOnline: boolean;
  private status$: Subscription;

  constructor(private networkService: NetworkService) {

  }

  ngOnInit() {
    this.status$ = this.networkService.getNetworkStatus().subscribe(status => {
      this.isOnline = status;
      if (status) {
        this.globeColor = 'success';
      } else {
        this.globeColor = 'danger';
      }
    });
  }

  ngOnDestroy() {
    this.status$.unsubscribe();
  }

  /**
   * manualSync
   */
  public manualSync = () => {
    if (this.isOnline) {
      console.log('se puede sincronizar');
    }
  }

}
