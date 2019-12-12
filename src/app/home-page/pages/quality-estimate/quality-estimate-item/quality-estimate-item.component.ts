import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QualityDetail, QualityEstimate} from '@primetec/primetec-angular';
import {SyncService} from '../../../../shared/services/sync/sync.service';

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
  @Input() details: Array<QualityDetail> = [];
  @Input() isOld = false;
  @Input() slideDisabled = true;
  @Output() itemSelected: EventEmitter<QualityEstimate | null> = new EventEmitter<QualityEstimate | null>();
  @Output() itemDelete: EventEmitter<QualityEstimate | null> = new EventEmitter<QualityEstimate | null>();

  private calibers: Array<any>;
  public chartData: any;
  public showChart = false;

  constructor(private syncService: SyncService) {

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

  /**
   * openChart
   */
  public openChart = async () => {
    this.calibers = await this.syncService.getCalibers();

    const yAxis = {
      type: 'value',
    };

    const xAxis = {
      type: 'category',
      data: this.calibers.map(item => item.name)
    }

    const series = [{
      data: this.details.map(item => item.value),
      type: 'line'
    }];

    this.chartData = {
      yAxis,
      xAxis,
      series
    };

    this.showChart = true;
  }
}
