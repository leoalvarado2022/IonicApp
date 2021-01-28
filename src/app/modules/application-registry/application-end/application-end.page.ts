import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderSyncService } from 'src/app/services/storage/order-sync/order-sync.service';
import { ApplicationListInterface } from '../application-list.interface';
import { ApplicationLocationInterface } from '../application-location.interface';
import * as moment from 'moment';
import { ApplicationRegistryService } from '../services/application-registry/application-registry.service';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-application-end',
  templateUrl: './application-end.page.html',
  styleUrls: ['./application-end.page.scss'],
})
export class ApplicationEndPage implements OnInit {

  public currentStep: 1 | 2 = 1;
  public readonly step1 = 1;
  public readonly step2 = 2;
  public isEdit = false;

  public endForm: FormGroup;
  public currentApplication: ApplicationListInterface;
  public orderChemicals: Array<any>;

  private id: number;
  private tempId: number;
  private orderHeader: any;
  private orderLocations: Array<ApplicationLocationInterface>;
  private weather: any;

  constructor(
    private route: ActivatedRoute,
    private orderSyncService: OrderSyncService,
    private formBuilder: FormBuilder,
    private applicationRegistryService: ApplicationRegistryService,
    private storeService: StoreService,
    private toastService: ToastService,
    private router: Router,
    private weatherService: WeatherService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");
    const edit = this.activatedRoute.snapshot.queryParamMap.get("edit");
    this.isEdit = !!edit;

    this.endForm = this.formBuilder.group({
      id: 0,
      hectares: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      temperature: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      humidity: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      wind: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      litersQuantity: ['', [
        Validators.required,
        Validators.min(1)
      ]],
      chemicals: this.formBuilder.array([])
    });

    if (this.isEdit) {
      this.loadApplication(this.id.toString());
    } else {
      this.loadData();
    }
  }

  /**
   * loadData
   */
  private loadData = () => {
    Promise.all([
      this.orderSyncService.getOrderBalanceToApplyById(this.id),
      this.orderSyncService.getOrderHeader(),
      this.orderSyncService.getOrderChemical(),
      this.orderSyncService.getApplicationLocationsById(this.id),
      this.weatherService.getWeather()
    ]).then((data: any) => {
      this.currentApplication = data[0];
      this.orderHeader = Object.assign({}, data[1], { date: this.cleanDate(data[1]['date']) });
      this.orderChemicals = data[2];
      this.orderLocations = data[3];
      this.weather = data[4];

      this.orderChemicals.forEach(item => this.addChemical(item));

      if (data[4]) {
        this.endForm.patchValue({
          temperature: Math.ceil(this.weather["main"]["temp"]),
          humidity: Math.ceil(this.weather["main"]["humidity"]),
          wind: Math.ceil(this.weather["wind"]["speed"])
        });
        this.endForm.updateValueAndValidity();
      }
    });
  }

  /**
   * createChemical
   * @param chemical
   */
  private createChemical = (chemical: any): FormGroup => {
    return this.formBuilder.group({
      id: chemical ? chemical.id : 0,
      applicationId: chemical.applicationId,
      applicationOrderId: chemical.applicationOrderId,
      dosis100l: [chemical ? chemical.dosis100l : '', [
        Validators.required,
        Validators.min(1)
      ]],
      hectaresDosis: [chemical ? chemical.hectaresDosis : '', [
        Validators.required,
        Validators.min(1)
      ]],
      itemId: chemical.itemId,
      itemName: chemical.itemName,
      phytosanitaryProgramId: chemical.phytosanitaryProgramId
    });
  }

  /**
   * addChemical
   */
  private addChemical = (chemical: any): void => {
    const chemicals = this.endForm.get('chemicals') as FormArray;
    chemicals.push(this.createChemical(chemical));
  }

  /**
   * validFirstStep
   */
  public validFirstStep = (): boolean => {
    return this.endForm.get('hectares').invalid ||
      this.endForm.get('temperature').invalid ||
      this.endForm.get('humidity').invalid ||
      this.endForm.get('wind').invalid ||
      this.endForm.get('litersQuantity').invalid;
  }

  /**
   * submit
   */
  public submit = () => {
    const user = this.storeService.getUser();

    if (this.isEdit) {
      const formData = Object.assign({}, this.endForm.value, {
        costCenterId: this.currentApplication.costCenterId,
        tempId: 99,
        applicationRegistry: this.currentApplication.applicationRegistry
      });

      this.updateApplication(user.id, this.orderHeader, formData, [], formData["chemicals"]);
    } else {
      const formData = Object.assign({}, this.endForm.value, {
        applicationOrderId: this.currentApplication.applicationOrderId,
        costCenterId: this.currentApplication.costCenterId,
        tempId: this.tempId,
        startDate: moment(this.orderLocations[0]['timestamp']).format('YYYY-MM-DD'),
        endDate: moment(this.orderLocations[this.orderLocations.length - 1]['timestamp']).format('YYYY-MM-DD')
      });

      const orderLocations = this.orderLocations.map(item => Object.assign({}, item, { timestamp: moment(item['timestamp']).format('YYYY-MM-DD HH:mm:ss') }));

      this.storeApplication(user.id, this.orderHeader, formData, orderLocations, formData["chemicals"]);
    }
  }

  /**
   * storeApplication
   * @param user user id
   * @param header order header
   * @param application application data
   * @param applicationLocations gps locations
   * @param applicationChemicals chemicals used
   */
  private storeApplication = (user: number, header: any, application: any, applicationLocations: Array<any> = [], applicationChemicals: Array<any> = []) => {
    this.applicationRegistryService.storeApplication(user, header, application, applicationLocations, applicationChemicals).subscribe(success => {
      Promise.all([
        this.orderSyncService.clearApplicationLocationsById(this.id),
        this.orderSyncService.clearApplicationCache()
      ]).then(() => {
        this.router.navigate(['/home-page/registro_aplicacion']);
      });
    }, error => {
      console.log('error', error);
      this.toastService.errorToast('ocurrio un error al grabar la aplicacion');
    });
  }

  /**
   * updateApplication
   * @param user user id
   * @param header order header
   * @param application application data
   * @param applicationLocations gps locations
   * @param applicationChemicals chemicals used
   */
  private updateApplication = (user: number, header: any, application: any, applicationLocations: Array<any> = [], applicationChemicals: Array<any> = []) => {
    this.applicationRegistryService.updateApplication(user, header, application, applicationLocations, applicationChemicals).subscribe(success => {
      Promise.all([
        this.orderSyncService.clearApplicationLocationsById(this.id),
        this.orderSyncService.clearApplicationCache()
      ]).then(() => {
        this.router.navigate(['/home-page/registro_aplicacion']);
      });
    }, error => {
      this.toastService.errorToast('ocurrio un error al editar la aplicacion');
    });
  }

  /**
   * cleanDate
   * @param date
   */
  private cleanDate = (date: string): string => {
    if (date.includes('T')) {
      return date.split('T')[0];
    }

    return date;
  }

  /**
   * loadApplication
   * @param id application id
   */
  private loadApplication = (id: string): void => {
    this.applicationRegistryService.getApplication(id).subscribe((success: any) => {
      const data = success.data;
      const { applicationHeader, application, chemicals, locations } = data;

      this.orderHeader = applicationHeader;
      this.currentApplication = application;

      this.endForm.patchValue({
        id: application.id,
        hectares: application["hectaresQuantity"],
        temperature: application["temperature"],
        humidity: application["humidity"],
        wind: application["wind"],
        litersQuantity: application["litersQuantity"]
      });

      if (chemicals) {
        chemicals.forEach(item => {
          this.addChemical(item);
        });
      }

      this.endForm.updateValueAndValidity();
    }, error => {
      this.toastService.errorToast('No se pudo cargar la aplicacion');
    })
  }

}
