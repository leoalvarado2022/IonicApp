import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HarvestEstimate, Unit} from '@primetec/primetec-angular';
import {SyncService} from '../../../../shared/services/sync/sync.service';

interface Arrows extends HarvestEstimate {
  arrow: string;
  color: string;
}

@Component({
  selector: 'app-harvest-estimate-item',
  templateUrl: './harvest-estimate-item.component.html',
  styleUrls: ['./harvest-estimate-item.component.scss'],
})
export class HarvestEstimateItemComponent implements OnInit {

  @Input() item: Arrows = null;
  @Input() isOld = false;
  @Input() slideDisabled = true;
  @Output() harvestSelected: EventEmitter<Arrows | null> = new EventEmitter<Arrows | null>();
  @Output() deleteHarvest: EventEmitter<Arrows | null> = new EventEmitter<Arrows | null>();

  private units: Array<Unit> = [];

  constructor(private syncService: SyncService) {

  }

  ngOnInit() {
    this.loadUnits();
  }

  private loadUnits = async () => {
    this.units = await this.syncService.getUnits();
  }

  /**
   * showList
   * @param item
   */
  public clickHarvest = (item: Arrows = null) => {
    this.harvestSelected.emit(item);
  }

  /**
   * deleteHarvest
   * @param item
   */
  public deleteItem = (item: Arrows) => {
    this.deleteHarvest.emit(item);
  }


  /**
   * showUnitName
   */
  public showUnitName = () => {
    const find = this.units.find(item => item.id === this.item.unit);
    return find ? find.code : 'N/A';
  }

}
