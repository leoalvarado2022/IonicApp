import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ToastService} from '../../services/toast/toast.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {

  @Input() data: any;
  public form: FormGroup;
  public submitted = false;
  public number: string;

  constructor(
    private modalController: ModalController,
    private toastService: ToastService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    // console.log(this.data);
  }

  /**
   * @description crear formulario
   */
  createForm() {
    this.form = this.formBuilder.group({
      number: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  /**
   * @description editar numero
   * @param number
   */
  editNumber(number: number) {
    // si el valor comienza en cero
    if ((this.form.get('number').value).startsWith('0')) {
      return false;
    }

    // si el primer valor es 0
    if ((this.form.get('number').value).length === 0 && number === 0) {
      return false;
    }

    this.form.patchValue({
      number: this.form.get('number').value + number.toString(),
    });
  }

  /**
   * @description borrar un numero
   */
  deleteNumber() {
    this.form.patchValue({
      number: (this.form.get('number').value).substring(0, (this.form.get('number').value).length - 1),
    });
  }

  /**
   * @description boton para pasar el igual
   */
  equal() {
    if (this.data.paymentTotal && this.data.paymentTotal > 0) {
      this.form.patchValue({
        number: this.data.paymentTotal.toString(),
      });
    }
  }

  /**
   * closeModal
   */
  public closeModal = () => {
    this.modalController.dismiss();
  };

  /**
   * @description enviar numero agregado en la calculadora
   */
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      this.submitted = false;
      return;
    }
    const formData = Object.assign({}, this.form.value);
    this.modalController.dismiss(formData.number);
  }
}
