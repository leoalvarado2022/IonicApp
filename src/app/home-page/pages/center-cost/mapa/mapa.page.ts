import {Component, OnInit} from '@angular/core';
import {CostCenterList} from '@primetec/primetec-angular';
import {SyncService} from '../../../../shared/services/sync/sync.service';
import {GeolocationService} from '../../../../shared/services/geolocation/geolocation.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  public lat: number;
  public lng: number;
  private loads = 0;

  public selectedCostCenter: CostCenterList;
  public filteredCostCenters: CostCenterList[] = [];
  private costCenters: CostCenterList[] = [];

  private position$: Subscription;

  constructor(
    private syncService: SyncService,
    private geolocationService: GeolocationService
  ) {
    this.position$ = this.geolocationService.getCurrentPosition().subscribe(value => {
      if (this.loads === 0) {
        this.lat = value.lat;
        this.lng = value.lng;
      }

      this.loads++;
    });
  }

  ngOnInit() {
    this.loadCostCenters();
  }

  ionViewWillLeave() {
    this.position$.unsubscribe();
  }

  /**
   * loadCostCenters
   */
  public loadCostCenters = async () => {
    this.costCenters = [];
    this.filteredCostCenters = [];
    this.costCenters = await this.syncService.getCostCenters();
    this.filteredCostCenters = this.costCenters;
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

}
