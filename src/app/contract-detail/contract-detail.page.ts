import {Component, OnInit} from '@angular/core';
import * as HighCharts from 'highcharts';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ContractDetailService} from './services/contract-detail/contract-detail.service';
import {CostCenter, CostCenterList, ProductContract, ProductContractDetail} from '@primetec/primetec-angular';
import {AuthService} from '../services/auth/auth.service';
import {SyncService} from '../shared/services/sync/sync.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.page.html',
  styleUrls: ['./contract-detail.page.scss'],
})
export class ContractDetailPage implements OnInit {

  public openSelected = false;
  public selectedGraphics = false;

  public costCenterListItem: CostCenterList = null;
  public costCenter: CostCenter = null;
  public productionContracts: ProductContract[] = [];
  public productionContractsDetails: ProductContractDetail[] = [];
  public harvestEstimate = [];
  public qualityEstimate = [];
  public qualityEstimateDetail = [];
  public lastHarvest = null;
  public lastQuality = null;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private contractDetailService: ContractDetailService,
    private authService: AuthService,
    private syncService: SyncService
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadContractDetail(id);
      this.loadCostCenter(id);
    }

    this.initChart();
  }

  /**
   * loadCostCenters
   */
  public loadCostCenter = async (id: string) => {
    const centers = await this.syncService.getCostCenters();
    this.costCenterListItem = centers.find(item => item.id === +id);
  }

  /**
   * loadContractDetail
   * @param id
   */
  private loadContractDetail = (id: string) => {
    this.contractDetailService.getCostCenter(id).subscribe((success: any) => {
      const data = success.data;
      const {
        costCenter,
        productionContracts,
        productionContractsDetails,
        harvestEstimate,
        qualityEstimate,
        qualityEstimateDetail
      } = data;
      this.costCenter = costCenter;
      this.productionContracts = productionContracts;
      this.productionContractsDetails = productionContractsDetails;
      this.harvestEstimate = harvestEstimate;
      this.qualityEstimate = qualityEstimate;
      this.qualityEstimateDetail = qualityEstimateDetail

      localStorage.setItem('harvestEstimate', JSON.stringify(harvestEstimate));
      localStorage.setItem('qualityEstimate', JSON.stringify(qualityEstimate));
      localStorage.setItem('qualityEstimateDetail', JSON.stringify(qualityEstimateDetail));

      this.getLastHarvest();
      this.getLastQuality();
    }, error => {
      this.authService.errorsHandler(error);
    });
  }

  /**
   * Get data hightchart
   */
  getJsonData(): Promise<any> {
    return this.httpClient.get<any>('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json').toPromise();
  }

  /**
   * iniciar el chart
   */
  async initChart() {

    const json = await this.getJsonData();

    const data: any = [{
      type: 'area',
      name: 'USD to EUR',
      data: json
    }];


    const area: any = {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, HighCharts.getOptions().colors[0]],
          [1, new HighCharts.Color(HighCharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
        ]
      },
      marker: {
        radius: 2
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1
        }
      },
      threshold: null
    };

    HighCharts.chart('container', {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: 'USD to EUR exchange rate over time'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Exchange rate'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area
      },
      series: data
    });
  }

  /**
   * abrir el panel header
   */
  openCloseSelected() {
    this.openSelected = !this.openSelected;
  }

  /**
   * abrir el grafico
   */
  openSelectedGraphics() {
    this.selectedGraphics = !this.selectedGraphics;
  }

  /**
   * getTotal
   */
  public getTotal = () => {
    return this.productionContractsDetails.reduce((accumulator, contractDetail) => accumulator + contractDetail.value, 0);
  }

  /**
   * getLastHarves
   */
  private getLastHarvest = () => {
    if (this.harvestEstimate.length === 1) {
      this.lastHarvest = Object.assign({}, this.harvestEstimate[0]);
    } else if (this.harvestEstimate.length > 1) {
      console.log('harvestEstimate', this.harvestEstimate);
    }
  }

  /**
   * getLastQuality
   */
  private getLastQuality = () => {
    if (this.qualityEstimate.length === 1) {
      console.log(this.qualityEstimate[0]);
      this.lastQuality = Object.assign({}, this.qualityEstimate[0]);
    } else if (this.qualityEstimate.length > 1) {
      console.log('qualityEstimate', this.qualityEstimate);
    }
  }

}
