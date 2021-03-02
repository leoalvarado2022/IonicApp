import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderSyncService } from 'src/app/services/storage/order-sync/order-sync.service';

@Component({
  selector: 'app-information-step',
  templateUrl: './information-step.page.html',
  styleUrls: ['./information-step.page.scss'],
})
export class InformationStepPage implements OnInit {

  public tempApplication: any;
  public orderChemicals: Array<any>;

  private tempId: number;
  public informationForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderSyncService: OrderSyncService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.tempId = +this.activatedRoute.snapshot.paramMap.get("tempId");

    this.informationForm = this.formBuilder.group({
      chemicals: this.formBuilder.array([])
    });

    this.loadData();
  }

  /**
   * loadData
   */
  private loadData = () => {
    Promise.all([
      this.orderSyncService.getTempApplicationById(this.tempId),
      this.orderSyncService.getOrderChemical(),
    ]).then((data: Array<any>) => {
      this.tempApplication = data[0];
      this.orderChemicals = data[1];

      // Add chemicals to the form
      this.orderChemicals.forEach(item => this.addChemical(item));
    });
  }

  /**
   * addChemical
   * @param chemical to add
   */
  private addChemical = (chemical: any): void => {
    const chemicals = this.informationForm.get('chemicals') as FormArray;
    chemicals.push(this.createChemical(chemical));
  }

  /**
  * createChemical
  * @param chemical to add
  */
  private createChemical = (chemical: any): FormGroup => {
    return this.formBuilder.group({
      id: chemical ? chemical.id : 0,
      itemId: chemical.itemId,
      itemName: chemical.itemName,
      applicationOrderId: chemical.applicationOrderId,
      dosis100l: [chemical ? chemical.dosis100l : '', [
        Validators.required,
        Validators.min(1)
      ]],
      hectaresDosis: [chemical ? chemical.hectaresDosis : '', [
        Validators.required,
        Validators.min(1)
      ]],
      tempId: this.tempId
    });
  }

  /**
   * nextStep
   */
  public nextStep = () => {
    const data = Object.assign({}, this.informationForm.value);

    this.orderSyncService.addTempApplicationChemicals(data.chemicals).then(() => {
      this.router.navigate(["/home-page/registro_aplicacion/weather-step", this.tempId]);
    });
  }

}
