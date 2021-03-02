import { Component, OnDestroy, OnInit } from '@angular/core';
import { CostCenterList } from '@primetec/primetec-angular';
import { GeolocationService } from '../../../../shared/services/geolocation/geolocation.service';
import { Subject, throwError } from 'rxjs';
import { StoreService } from '../../../../shared/services/store/store.service';
import { catchError, take, takeUntil } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, OnDestroy {

  public lat: number;
  public lng: number;

  public selectedCostCenter: CostCenterList;
  public filteredCostCenters: CostCenterList[] = [];
  private costCenters: CostCenterList[] = [];

  private unsubscriber = new Subject();


  constructor(
    private geolocationService: GeolocationService,
    private storeService: StoreService,
    private toastService: ToastService
  ) {

  }

  ngOnInit() {
    this.loadCurrentPosition();

    this.storeService.stateChanged.pipe(
      takeUntil(this.unsubscriber)
    ).subscribe(() => {
      this.costCenters = this.storeService.getCostCenters();
      this.filteredCostCenters = this.costCenters;
    });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  ionViewDidEnter() {
    const costCenters = this.storeService.getCostCenters();
    this.costCenters = [...costCenters];
    this.filteredCostCenters = [...costCenters];
  }

  /**
   * searchCostCenter
   * @param search
   */
  public searchCostCenter = (search: string) => {
    if (search) {
      this.filteredCostCenters = this.costCenters.filter(item => {
        return (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.producerName.toLowerCase().includes(search.toLowerCase()) ||
          item.contractResponsible.toLowerCase().includes(search.toLowerCase()) ||
          item.contractDocumentNumber.toLowerCase().includes(search.toLowerCase()) ||
          item.speciesName.toLowerCase().includes(search.toLowerCase()) ||
          item.varietyName.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      this.filteredCostCenters = this.costCenters;
    }
  }

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.filteredCostCenters = this.costCenters;
  }

  /**
   * loadCurrentPosition
   */
  public loadCurrentPosition = () => {
    this.geolocationService.getCurrentPosition()
      .pipe(
        takeUntil(this.unsubscriber),
        catchError(error => {
          this.toastService.errorToast(error)
          return throwError(error);
        }),
      ).subscribe(position => {
        this.lat = position.lat;
        this.lng = position.lng;
      });
  }

}
