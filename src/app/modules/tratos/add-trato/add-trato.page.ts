import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidateRut} from '@primetec/primetec-angular';

@Component({
  selector: 'app-associate-work',
  templateUrl: './add-trato.page.html',
  styleUrls: ['./add-trato.page.scss'],
})
export class AddTratoPage implements OnInit {

  @Input() deals: any;
  public activeForm: FormGroup;

  constructor(public modalController: ModalController,
              private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    console.log(this.deals, 'deal modal');

    this.activeForm = this.formBuilder.group({
      id: ['', Validators.required],
      option: ['', Validators.required],
      automatico: [true, Validators.required],
      name_labor: ['', Validators.required],
      unit_control: ['', Validators.required],
    });
  }

  /**
   * closeModal
   */
  public closeWork = async (data: any = null) => {
    await this.modalController.dismiss({
      data
    });
  };


  /**
   * @description agregar trato
   */
  async onPress() {

    console.log('tratos');

    await this.closeWork();
  }


  /**
   * onSubmit
   */
  public onSubmit() {
    const data = Object.assign({}, this.activeForm.value);

    console.log(data, 'data');
  }

  /**
   * @description select change value
   * @param event
   */
  public change(event: any) {

    const deal = this.deals.find(data => data.id === event.target.value);

    if (deal) {
      this.activeForm.patchValue({
        name_labor: deal.name_labor,
        unit_control: deal.unit_control
      });
    }
  }
}
