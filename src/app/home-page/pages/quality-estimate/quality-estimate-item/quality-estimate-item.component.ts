import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QualityEstimate} from '@primetec/primetec-angular';

interface Arrows extends QualityEstimate {
  arrow: string;
  color: string;
}

@Component({
  selector: 'app-quality-estimate-item',
  templateUrl: './quality-estimate-item.component.html',
  styleUrls: ['./quality-estimate-item.component.scss'],
})
export class QualityEstimateItemComponent implements OnInit {

  @Input() item: Arrows = null;
  @Input() isOld = false;
  @Input() slideDisabled = true;
  @Output() itemSelected: EventEmitter<Arrows | null> = new EventEmitter<Arrows | null>();
  @Output() itemDelete: EventEmitter<Arrows | null> = new EventEmitter<Arrows | null>();

  constructor() {

  }

  ngOnInit() {

  }

  /**
   * clickItem
   * @param item
   */
  public clickItem = (item: Arrows = null) => {
    this.itemSelected.emit(item);
  }

  /**
   * deleteItem
   * @param item
   */
  public deleteItem = (item: Arrows) => {
    this.itemDelete.emit(item);
  }
}
