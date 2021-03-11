import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartData, DataService, OverallSummary } from '../../services/data.service';
import { overallSummaryOptions } from './overall-summary.constant';

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-overall-summary',
  templateUrl: './overall-summary.component.html',
  styleUrls: ['./overall-summary.component.scss']
})
export class OverallSummaryComponent implements OnInit, OnChanges {

  public summary: OverallSummary;

  @Input()
  public state: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.setSummary();
  }

  ngOnChanges(): void {
    this.setSummary();
  }

  private setSummary(): void {
    this.dataService.getOverallSummary({
      state: this.state
    }).subscribe((summary: OverallSummary) => {
      this.summary = summary;

      const options = overallSummaryOptions;
      const chartData = this.toChartData(summary);
      options.series = chartData.series;
      Highcharts.chart(options);
    });
  }

  private toChartData(summary: OverallSummary): ChartData {
    const data: Highcharts.PointOptionsObject[] = [];
    data.push({
      name: 'Non Covid',
      y: summary.nonCovid
    });
    data.push({
      name: 'Recovered',
      y: summary.recovered
    });
    data.push({
      name: 'Active',
      y: summary.active
    });
    data.push({
      name: 'Deaths',
      y: summary.deaths
    });

    const series: Highcharts.SeriesPieOptions[] = [{
      name: 'Count',
      type: 'pie',
      data
    }];

    return {
      series
    };
  }

}
