import { AgmMap } from '@agm/core';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { Subject } from 'rxjs';
import { takeUntil, filter, map } from 'rxjs/operators';
import { OrderSyncService } from 'src/app/services/storage/order-sync/order-sync.service';
import { GeolocationService } from 'src/app/shared/services/geolocation/geolocation.service';
import { ApplicationListInterface } from '../application-list.interface';
import { ApplicationLocationInterface } from '../application-location.interface';

declare var google: any;

@Component({
  selector: 'app-application-start',
  templateUrl: './application-start.page.html',
  styleUrls: ['./application-start.page.scss'],
})
export class ApplicationStartPage implements OnInit, OnDestroy {
  
  public currentLat = -33.4372; // Santiago Default
  public currentLng = -70.6506; // Santiago Default
  public zoom = 10;

  public currentApplication: ApplicationListInterface;
  public positions: Array<ApplicationLocationInterface> = [];  
  private id: number;
  private tempId: number;
  private unsubscriber = new Subject();

  constructor(
    private route: ActivatedRoute,
    private orderSyncService: OrderSyncService,
    private geolocationService: GeolocationService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");

    Promise.all([
      this.orderSyncService.getOrderBalanceToApplyById(this.id),
      this.orderSyncService.getApplicationLocationsById(this.id),
      this.orderSyncService.getNextApplicationTempId()
    ]).then(data => {
      this.currentApplication = data[0];
      this.positions = data[1];

      this.tempId = data[2];
    });    
  }

  ngOnDestroy() {
    this.unsubscriber.complete();
  }

  ionViewDidEnter() {    
    this.geolocationService.watchPosition().pipe(
      takeUntil(this.unsubscriber),
      filter((position: Geoposition) => position.coords !== undefined && (position.coords.latitude !== this.currentLat && position.coords.longitude !== this.currentLng)),
      map(item => {
        return {
          id: this.id,
          timestamp: item.timestamp,
          latitude: item.coords.latitude,
          longitude: item.coords.longitude,
          accuracy: item.coords.accuracy,
          altitude: item.coords.altitude,
          altitudeAccuracy: item.coords.altitudeAccuracy,
          heading: item.coords.heading,
          speed: item.coords.speed,
          tempId: this.tempId
        };
      })
    ).subscribe((geoposition: ApplicationLocationInterface) => {
      this.orderSyncService.addApplicationLocations(geoposition).then((data: Array<ApplicationLocationInterface>) => {
        this.positions = [...data];        

        this.currentLat = geoposition.latitude;
        this.currentLng = geoposition.longitude;        
      });
    })
  }

  /**
   * endApplication
   */
  public endApplication = () => {
    this.router.navigate(["/home-page/registro_aplicacion/application-end", this.id]);
  }

}
