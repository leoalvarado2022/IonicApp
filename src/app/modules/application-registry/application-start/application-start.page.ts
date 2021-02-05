import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Subject, throwError } from 'rxjs';
import { takeUntil, map, catchError, switchMap } from 'rxjs/operators';
import { OrderSyncService } from 'src/app/services/storage/order-sync/order-sync.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { GeolocationService } from 'src/app/shared/services/geolocation/geolocation.service';
import { ApplicationListInterface } from '../application-list.interface';
import { ApplicationLocationInterface } from '../application-location.interface';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import haversine from "haversine";
@Component({
  selector: 'app-application-start',
  templateUrl: './application-start.page.html',
  styleUrls: ['./application-start.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationStartPage implements OnInit, OnDestroy {

  public currentApplication: ApplicationListInterface;
  public positions: Array<ApplicationLocationInterface> = [];
  private id: number;
  private tempId: number;
  private unsubscriber = new Subject();

  public weather: any;
  public loading = false;
  public loadingMessage = 'Cargando...';

  public test: any;

  constructor(
    private route: ActivatedRoute,
    private orderSyncService: OrderSyncService,
    private geolocationService: GeolocationService,
    private router: Router,
    private weatherService: WeatherService,
    private toastService: ToastService,
    private changeDetectorRef: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.test = from(this.orderSyncService.getApplicationLocationsById(this.id));

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
    this.loading = true;
    this.loadingMessage = 'Obteniendo Ubicacion';

    this.geolocationService.getCurrentPosition()
      .pipe(
        switchMap(data => {
          this.loadingMessage = 'Obteniendo Clima';
          return this.weatherService.getLatLngWeather(data.lat, data.lng)
            .pipe(
              takeUntil(this.unsubscriber),
              catchError(error => {
                this.toastService.errorToast('No se pudo cargar el clima');
                this.loading = false;
                return throwError(error);
              })
            );
        }),
        takeUntil(this.unsubscriber),
        catchError(error => {
          this.toastService.errorToast(error);
          this.loading = false;
          return throwError(error);
        }),
      ).subscribe(weather => {
        const data = weather['data'];

        this.weatherService.setWeather(data).then(() => {
          this.weather = data;
          this.watchPosition();
          this.loading = false;
          this.changeDetectorRef.detectChanges();
        });
      });
  }

  /**
   * watchPosition
   */
  private watchPosition = () => {
    this.geolocationService.startTracker()
      .pipe(
        takeUntil(this.unsubscriber),
        map(item => this.mapCustomPosition(item)),
      ).subscribe(data => {
        if (this.positions.length === 0) {
          this.positions.push(data);
          this.orderSyncService.addApplicationLocations(data).then();
          this.changeDetectorRef.detectChanges();
        } else if (this.positions.length > 0) {
          const start = this.positions[this.positions.length - 1];
          const distance = haversine(start, data, { unit: 'meter' });

          if (distance > 5) {
            this.positions.push(data);
            this.orderSyncService.addApplicationLocations(data).then();
            this.changeDetectorRef.detectChanges();
          }
        }
      });
  }

  /**
   * mapCustomPosition
   * @param item geoposition object
   */
  private mapCustomPosition = (item: any) => ({
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
  });

  /**
   * endApplication
   */
  public endApplication = () => {
    this.router.navigate(['/home-page/registro_aplicacion/application-end', this.id]);
  }

  /**
   * roundUp
   * @param value to round up float values
   */
  public roundUp = (value: number): number => {
    return Math.ceil(value);
  }

}
