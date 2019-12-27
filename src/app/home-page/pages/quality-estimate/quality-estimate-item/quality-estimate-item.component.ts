import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CostCenter, QualityDetail, QualityEstimate} from '@primetec/primetec-angular';
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

  @Input() costCenter: CostCenter;
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
    const validCalibres = this.details.map(item => item.qualityName);
    const filteredCalibers = this.calibers.filter((item: any) => item.species === this.costCenter.species && validCalibres.includes(item.name.trim()));

    const xAxis = {
      type: 'category',
      data: filteredCalibers.map(item => item.code)
    };

    const yAxis = {
      type: 'value',
      min: 0,
      max: 100
    };

    const series = [{
      data: this.details.map(item => item.value),
      type: 'bar',
      name: '%'
    }];

    this.chartData = {
      title: {
        text: 'Estimacion de Calidad',
        subtext: 'Porcentajes Calibres',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: (params) => {
          const code = params[0].name;
          const caliber = this.calibers.find(item => item.code === code);
          return caliber ? caliber.name : 'N/A';
        }
      },
      label: {
        show: true,
        formatter: '{c}{a}'
      },
      yAxis,
      xAxis,
      series
    };

    this.showChart = true;
  }
}
