import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HarvestEstimate, Unit} from '@primetec/primetec-angular';

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
  @Input() units: Array<Unit> = [];

  @Output() harvestSelected: EventEmitter<Arrows | null> = new EventEmitter<Arrows | null>();
  @Output() deleteHarvest: EventEmitter<Arrows | null> = new EventEmitter<Arrows | null>();

  constructor() {

  }

  ngOnInit() {

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
   * showUnitCode
   */
  public showUnitCode = () => {
    const find = this.units.find(item => item.id === this.item.unit);
    return find ? find.code : 'N/A';
  }

}
