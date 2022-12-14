import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {Router} from '@angular/router';
import {ToastService} from '../../../../shared/services/toast/toast.service';
import {AuthService} from '../../../../shared/services/auth/auth.service';
import {HttpService} from '../../../../shared/services/http/http.service';
import {AppService} from '../../../../services/app/app.service';

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
    private httpService: HttpService,
    public appService: AppService,
  ) {
  }

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
  }


  /**
   * update
   * @param data
   */
  private async update(data): Promise<any> {

    await this.loaderService.startLoader();

    return new Promise((resolve, reject) => {
      this.authService.recoveryPassword(data).subscribe((success: any) => {
        this.toastService.successToast(success.message);
        this.router.navigate(['auth/login']);
        this.loaderService.stopLoader();
        resolve(true);
      }, error => {
        this.loaderService.stopLoader();
        this.httpService.errorHandler(error);
        resolve(false);
      });
    });
  }

}
