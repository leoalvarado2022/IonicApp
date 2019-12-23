import {Component, OnInit} from '@angular/core';
import {SyncService} from '../../../shared/services/sync/sync.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-rem-quadrille',
  templateUrl: './rem-quadrille.page.html',
  styleUrls: ['./rem-quadrille.page.scss'],
})
export class RemQuadrillePage implements OnInit {

  private quadrilles: Array<any> = [];
  public filteredQuadrilles: Array<any> = [];
  private isLoading = false;

  constructor(
    private syncService: SyncService,
    private router: Router
  ) {

  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.loadQuadrilles();
  }

  ionViewDidEnter() {
    this.isLoading = false;
  }

  ngOnInit() {

  }

  /**
   * loadQuadrilles
   */
  private loadQuadrilles = async () => {
    const quadrilles = await this.syncService.getQuadrilles();
    this.quadrilles = [...quadrilles];
    this.filteredQuadrilles = [...quadrilles];
  }

  /**
   * reload
   */
  public reload = async (event) => {
    await this.loadQuadrilles();
    event.target.complete();
  }

  /**
   * goToWorkers
   * @param quadrille
   */
  public goToWorkers = (quadrille: any) => {
    this.router.navigate(['/home-page/rem-workers', quadrille.id]);
  }

}
