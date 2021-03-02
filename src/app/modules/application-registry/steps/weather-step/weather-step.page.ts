import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { catchError, switchMap, takeUntil } from 'rxjs/operators';
import { OrderSyncService } from 'src/app/services/storage/order-sync/order-sync.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { GeolocationService } from 'src/app/shared/services/geolocation/geolocation.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
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
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.tempId = +this.activatedRoute.snapshot.paramMap.get("tempId");

    this.weatherForm = this.formBuilder.group({
      location: ["", Validators.required],
      sky: ["", Validators.required],
      wind: [0, [
        Validators.required,
        Validators.min(0)
      ]],
      humidity: [0, [
        Validators.required,
        Validators.min(0)
      ]],
      temperature: [0, Validators.required],
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
              catchError(() => {
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
          this.weather = data;
          this.patchForm();
          this.loading = false;
        } else {
          this.loading = false;
        }
      });
  }

  /**
   * roundUp
   * @param value to round up float values
   */
  private roundUp = (value: number): number => {
    return value ? Math.ceil(value) : 0;
  }

  /**
   * patchForm
   */
  private patchForm = (): void => {
    if (this.weather) {
      this.weatherForm.patchValue({
        location: this.weather["name"],
        sky: this.weather["weather"][0]["description"],
        temperature: this.roundUp(this.weather["main"]["temp"]),
        humidity: this.roundUp(this.weather["main"]["humidity"]),
        wind: this.roundUp(this.weather["wind"]["speed"])
      });

      this.weatherForm.updateValueAndValidity();
    }
  }

  /**
   * nextStep
   */
  public nextStep = (): void => {
    const data = Object.assign({}, this.weatherForm.value);
    this.orderSyncService.addTempWeather(data).then(() => {
      this.router.navigate(["/home-page/registro_aplicacion/operation-step", this.tempId]);
    });
  }

}
