import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Subject } from 'rxjs';
import { catchError, map, switchMap, takeUntil } from 'rxjs/operators';
import { OrderSyncService } from 'src/app/services/storage/order-sync/order-sync.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { GeolocationService } from 'src/app/shared/services/geolocation/geolocation.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import haversine from "haversine";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather-step',
  templateUrl: './weather-step.page.html',
  styleUrls: ['./weather-step.page.scss'],
})
export class WeatherStepPage implements OnInit, OnDestroy {

  public loading: boolean;
  public loadingMessage: string;
  public weather: any;
  public positions: Array<any> = [];
  public weatherForm: FormGroup;

  private tempId: number;
  private unsubscriber = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private geolocationService: GeolocationService,
    private weatherService: WeatherService,
    private toastService: ToastService,
    private orderSyncService: OrderSyncService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.tempId = +this.activatedRoute.snapshot.paramMap.get("tempId");

    this.weatherForm = this.formBuilder.group({
      location: ["", Validators.required],
      sky: ["", Validators.required],
      wind: ["", [
        Validators.required,
        Validators.min(0)
      ]],
      humidity: ["", [
        Validators.required,
        Validators.min(0)
      ]],
      temperature: ["", Validators.required],
      tempId: this.tempId
    });
  }

  ngOnDestroy() {
    this.unsubscriber.complete();
  }

  ionViewWillEnter() {
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
                return of(null);
              })
            );
        }),
        takeUntil(this.unsubscriber),
        catchError(error => {
          if (error === "User denied Geolocation") {
            this.toastService.errorToast("GPS no tiene permiso");
          } else if (error === "Timeout expired") {
            this.toastService.errorToast("Tiempo agotado para obtener ubicacion");
          } else {
            this.toastService.errorToast(error);
          }

          this.loading = false;
          return of(null);
        }),
      ).subscribe(weather => {
        if (weather) {
          const data = weather['data'];

          this.weatherService.setWeather(data).then(() => {
            this.weather = data;
            this.watchPosition();
            this.loading = false;
          });
        } else {
          this.loading = false;
        }
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
        } else if (this.positions.length > 0) {
          const start = this.positions[this.positions.length - 1];
          const distance = haversine(start, data, { unit: 'meter' });

          if (distance > 5) {
            this.positions.push(data);
            this.orderSyncService.addApplicationLocations(data).then();
          }
        }
      });
  }

  /**
   * mapCustomPosition
   * @param item geoposition object
   */
  private mapCustomPosition = (item: any) => ({
    id: 0,
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
   * roundUp
   * @param value to round up float values
   */
  public roundUp = (value: number): number => {
    return Math.ceil(value);
  }

}
