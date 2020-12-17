import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Unit} from '@primetec/primetec-angular';
import { HarvestEstimate } from '../harvest-estimate.interface';

@Component({
  selector: 'app-harvest-estimate-item',
  templateUrl: './harvest-estimate-item.component.html',
  styleUrls: ['./harvest-estimate-item.component.scss'],
})
export class HarvestEstimateItemComponent implements OnInit {

  @Input() item: HarvestEstimate = null;
  @Input() isOld = false;
  @Input() slideDisabled = true;
  @Input() units: Array<Unit> = [];

  @Output() harvestSelected: EventEmitter<HarvestEstimate | null> = new EventEmitter<HarvestEstimate | null>();
  @Output() deleteHarvest: EventEmitter<HarvestEstimate | null> = new EventEmitter<HarvestEstimate | null>();

  constructor() {

  }

  ngOnInit() {

  }

  /**
   * showList
   * @param item
   */
  public clickHarvest = (item: HarvestEstimate = null) => {
    this.harvestSelected.emit(item);
  }

  /**
   * deleteHarvest
   * @param item
   */
  public deleteItem = (item: HarvestEstimate) => {
    this.deleteHarvest.emit(item);
  }

  /**
   * showUnitCode
   */
  public showUnitCode = () => {
    const find = this.units.find(item => item.id === this.item.unit);
    return find ? find.code : 'N/A';
  }

}
