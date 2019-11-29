import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoaderService} from '../../../services/loader/loader.service';
import {Router} from '@angular/router';
import {ToastService} from '../../../services/toast/toast.service';
import * as MenuAction from '../../../store/menu/menu.action';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {

  public recovery: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loaderService: LoaderService,
    private router: Router,
    private toastService: ToastService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.recovery = this.formBuilder.group({
      username: ['', [Validators.required]],
    });
  }

  public onSubmit = async () => {

    const list = {
      domain: 'fx11.primetec.cl',
    };

    const data = Object.assign(list, this.recovery.value);

    await this.update(data);
  };


  /**
   * update
   * @param data
   */
  private async update(data): Promise<any> {

    await this.loaderService.showLoader();

    return new Promise((resolve, reject) => {
      this.authService.recoveryPassword(data).subscribe((success: any) => {
        this.toastService.successToast(success.message);
        this.router.navigate(['auth/login']);
        this.loaderService.hideLoader();
        resolve(true);
      }, error => {
        const msg = this.authService.errorsHandler(error);
        this.loaderService.hideLoader();
        this.toastService.errorToast(msg);
        resolve(false);
      });
    });
  }

}
