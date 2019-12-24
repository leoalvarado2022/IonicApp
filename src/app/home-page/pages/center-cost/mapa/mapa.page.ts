import {Component, OnDestroy, OnInit} from '@angular/core';
import {CostCenterList} from '@primetec/primetec-angular';
import {SyncService} from '../../../../shared/services/sync/sync.service';
import {LoaderService} from '../../../../shared/services/loader/loader.service';
import {GeolocationService} from "../../../../shared/services/geolocation/geolocation.service";
import {Subscription} from "rxjs";

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

  constructor(
    private syncService: SyncService,
    private loaderService: LoaderService,
    private geolocationService: GeolocationService
  ) {

  }

  ionViewWillEnter() {
    this.loadCostCenters();
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.position$.unsubscribe();
  }

  ionViewDidEnter() {
    this.loadCurrentPosition();
  }

  /**
   * loadCostCenters
   */
  public loadCostCenters = async () => {
    this.loaderService.startLoader('Cargando centros de costo...');
    this.costCenters = [];
    this.filteredCostCenters = [];
    this.costCenters = await this.syncService.getCostCenters();
    this.filteredCostCenters = this.costCenters;
    this.loaderService.stopLoader();
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
    this.position$ = this.geolocationService.getCurrentPosition().subscribe(position => {
      this.lat = position.lat;
      this.lng = position.lng;
    });
  }

}
