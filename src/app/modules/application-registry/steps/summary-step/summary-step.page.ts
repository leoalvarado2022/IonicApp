import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderSyncService } from 'src/app/services/storage/order-sync/order-sync.service';
import * as moment from "moment";
import { StepperService } from 'src/app/services/storage/stepper/stepper.service';

@Component({
  selector: 'app-summary-step',
  templateUrl: './summary-step.page.html',
  styleUrls: ['./summary-step.page.scss'],
})
export class SummaryStepPage implements OnInit {

  public applicationData: any;
  public chemicalsData: Array<any>;
  public locationsData: Array<any>;
  public weatherData: any;
  public operationData: any;
  public isLoading = false;

  private tempId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderSyncService: OrderSyncService,
    private router: Router,
    private stepperService: StepperService
  ) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.tempId = +this.activatedRoute.snapshot.paramMap.get('tempId');

    this.orderSyncService.getAllTempDataById(this.tempId).then((data: Array<any>) => {
      this.applicationData = data[0];
      this.chemicalsData = data[1];
      this.weatherData = data[2];
      this.operationData = data[3];
      this.locationsData = data[4];

      this.isLoading = false;
    });
  }

  /**
   * formatDate
   * @param date date
   * @param format format
   */
  public formatDate = (date: string, format: string = "DD/MM/YYYY HH:mm:ss") => {
    return moment(date).format(format);
  }

  /**
   * storeApplication
   */
  public storeApplication = () => {
    this.orderSyncService.setTempApplicationReadyById(this.applicationData.tempId).then(() => {
      this.stepperService.syncAll();
      this.router.navigate(["/home-page/registro_aplicacion/applications", this.applicationData.applicationOrderId]);
    });
  }

}
