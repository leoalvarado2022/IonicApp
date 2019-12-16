import {Component} from '@angular/core';
import {LoaderService} from '../../services/loader/loader.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {

  public isLoading: boolean;
  private loader;

  constructor(
    private loaderService: LoaderService,
    private loadingController: LoadingController
  ) {
    this.loaderService.getLoaderStatus().subscribe(async (status: boolean) => {
      this.isLoading = status;

      if (status) {
        return await this.showLoader();
      } else {
        return await this.hideLoader();
      }
    });
  }

  /**
   * showLoader
   */
  public showLoader = async () => {
    this.loader = await this.loadingController.create({
      message: this.loaderService.getMessage(),
      animated: true,
      spinner: 'circles',

      // CAMBIAR A FALSE
      backdropDismiss: true,
      keyboardClose: true,
    });
    return await this.loader.present();
  }

  /**
   * hideLoader
   */
  public hideLoader = async () => {
    if (this.loader) {
      // return await this.loadingController.dismiss();
      return await this.loader.dismiss();
    }

    return;
  }

}
