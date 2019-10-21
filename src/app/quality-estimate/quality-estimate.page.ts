import {Component, OnInit} from '@angular/core';
import * as HighCharts from 'highcharts';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-quality-estimate',
  templateUrl: './quality-estimate.page.html',
  styleUrls: ['./quality-estimate.page.scss'],
})
export class QualityEstimatePage implements OnInit {

  public selectedGraphics: boolean = false;

  constructor(private httpClient: HttpClient) {
    this.initChart();
  }

  ngOnInit() {
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

    HighCharts.chart('containerEstimate', {
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
        area: area
      },
      series: data
    });
  }


  /**
   * abrir el grafico
   */
  openSelectedGraphics() {
    this.selectedGraphics = !this.selectedGraphics;
  }
}
