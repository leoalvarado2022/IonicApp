import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval, NEVER, Observable, Subject } from 'rxjs';
import { filter, map, switchMap, takeUntil, takeWhile } from 'rxjs/operators';
import * as moment from "moment";
import { OrderSyncService } from 'src/app/services/storage/order-sync/order-sync.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { GeolocationService } from 'src/app/shared/services/geolocation/geolocation.service';
import { ApplicationLocationInterface } from '../../application-location.interface';
import * as haversine from "haversine";

@Component({
  selector: 'app-operation-step',
  templateUrl: './operation-step.page.html',
  styleUrls: ['./operation-step.page.scss'],
})
export class OperationStepPage implements OnInit, OnDestroy {

  public application: any;
  public readonly startTime = "00:00:00";

  private tempId: number;
  private unsubscriber = new Subject();

  // Timer    
  private isTimerPaused = new BehaviorSubject(true);
  private readonly startDate = "1900-01-01 00:00:00";
  private currentDate = this.startDate;
  private chrono = this.startTime;
  private chronoState = true;
  private positions: Array<ApplicationLocationInterface> = [];

  constructor(
    private orderSyncService: OrderSyncService,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private geolocationService: GeolocationService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.tempId = +this.activatedRoute.snapshot.paramMap.get("tempId");
    this.loadApplication();

    this.isTimerPaused.pipe(
      takeUntil(this.unsubscriber),
      switchMap(isPaused => {
        return isPaused ? NEVER : interval(1000);
      }),
    ).subscribe(() => {
      this.updateChrono();
    });
  }

  ngOnDestroy() {
    this.unsubscriber.complete();
  }

  /**
   * watchPosition
   */
  private watchPosition = (): void => {
    this.geolocationService.startTracker()
      .pipe(
        takeUntil(this.unsubscriber),
        filter(item => !this.isTimerPaused.getValue()),
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
  private mapCustomPosition = (item: any): ApplicationLocationInterface => ({
    id: 0,
    timestamp: moment(item.timestamp).format("YYYY-MM-DD HH:mm:ss"),
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
   * loadApplication
   */
  private loadApplication = () => {
    this.orderSyncService.getTempApplicationById(this.tempId).then(data => {
      this.application = data;
    });
  }

  /**
   * getChrono
   */
  public getChrono = (): string => {
    return this.chrono;
  }

  /**
   * updateChrono
   */
  public updateChrono = (): void => {
    const clone = moment(this.currentDate);
    const newTime = clone.add(1, 'second');

    this.currentDate = newTime.format("YYYY-MM-DD HH:mm:ss");
    this.chrono = newTime.format("HH:mm:ss");
  }


  /**
   * pauseStop
   */
  public pauseStop = (): void => {
    this.isTimerPaused.next(true);
  }

  /**
   * startResume
   */
  public startResume = (): void => {
    this.isTimerPaused.next(false);
    this.watchPosition();
  }

  /**
   * getTimerStatus
   */
  public getTimerStatus = (): Observable<boolean> => {
    return this.isTimerPaused;
  }

  /**
   * reset
   */
  public reset = (): void => {
    this.chrono = this.startTime;
    this.currentDate = this.startDate;
    this.pauseStop();
  }

  /**
   * endApplication
   */
  public endApplication = async () => {
    const yes = await this.alertService.confirmAlert("Esta seguro que desea finalizar esta applicacion?");

    if (yes) {
      this.pauseStop();

      const startDate = moment(this.startDate);
      const currentDate = moment(this.currentDate);
      const totalTime = currentDate.diff(startDate, 'minutes', true);
      const totalRounded = Math.round(totalTime);

      const data = {
        time: totalRounded,
        tempId: this.tempId,
        startDate: moment().format("YYYY-MM-DD HH:mm:ss"),
        endDate: moment().format("YYYY-MM-DD HH:mm:ss")
      }

      await this.orderSyncService.addTempApplicationsTime(data);
      this.router.navigate(["/home-page/registro_aplicacion/summary-step", this.tempId]);
    }
  }

}
