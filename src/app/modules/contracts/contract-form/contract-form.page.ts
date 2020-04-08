import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StoreService} from "../../../shared/services/store/store.service";

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.page.html',
  styleUrls: ['./contract-form.page.scss'],
})
export class ContractFormPage implements OnInit {

  public currentStep: 1 | 2 | 3 = 1;
  public contractForm: FormGroup;

  public nationalities: Array<any> = [];
  public contractTypes: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.contractForm = this.formBuilder.group({
      nationality: [''],
      contractType: [''],
      identifier: [''],
      name: [''],
      lastName: [''],
      sureName: [''],
      dob: [''],
      civilStatus: [''],
      afp: [''],
      isapre: [''],
      retired: [''],
      quadrille: ['']
    });

    this.nationalities = this.storeService.getCountries();
    this.contractTypes = this.storeService.getContractTypes();
  }

}
