import {Component, OnDestroy, OnInit} from '@angular/core';
import {CostCenterList} from '@primetec/primetec-angular';
import {SyncService} from '../../../../shared/services/sync/sync.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {GeolocationService} from '../../../../shared/services/geolocation/geolocation.service';
import {Subscription} from 'rxjs';
import {StoreService} from '../../../../shared/services/store/store.service';

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

  private position$: Subscription;
  private store$: Subscription;

  constructor(
    private syncService: SyncService,
    private loaderService: LoaderService,
    private geolocationService: GeolocationService,
    private storeService: StoreService
  ) {

  }

  ngOnInit() {
    this.loadCurrentPosition();

    this.store$ = this.storeService.stateChanged.subscribe(data => {
      this.costCenters = this.storeService.getCostCenters();
      this.filteredCostCenters = this.costCenters;
    });
  }

  ngOnDestroy(): void {
    this.position$.unsubscribe();
    this.store$.unsubscribe();
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
  };

  /**
   * cancelSearch
   */
  public cancelSearch = () => {
    this.filteredCostCenters = this.costCenters;
  };

  /**
   * loadCurrentPosition
   */
  public loadCurrentPosition = () => {
    this.position$ = this.geolocationService.getCurrentPosition().subscribe(position => {
      this.lat = position.lat;
      this.lng = position.lng;
    });
  }

}
