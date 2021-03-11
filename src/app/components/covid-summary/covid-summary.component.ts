import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { covidSummaryOptions } from './covid-summary.constant';
import * as Highcharts from 'highcharts';
import { ChartData, CovidSummary, DataService } from '../../services/data.service';

@Component({
  selector: 'app-covid-summary',
  templateUrl: './covid-summary.component.html',
  styleUrls: ['./covid-summary.component.scss']
})
export class CovidSummaryComponent implements OnInit, OnChanges {

  public summary: CovidSummary;

  @Input() state: string;

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
    this.dataService.getCovidSummary({
      state: this.state
    }).subscribe((summary: CovidSummary) => {
      this.summary = summary;

      const options = covidSummaryOptions;
      const chartData = this.toChartData(summary);
      options.series = chartData.series;
      Highcharts.chart(options);
    });
  }

  private toChartData(summary: CovidSummary): ChartData {
    const data: Highcharts.PointOptionsObject[] = [];
    data.push({
      name: 'Recovered',
      y: summary.recovered
    });
    data.push({
      name: 'Death',
      y: summary.deaths
    });
    data.push({
      name: 'Active',
      y: summary.active
    });

    const series: Highcharts.SeriesPieOptions[] = [];
    series.push({
      name: 'Count',
      type: 'pie',
      data
    });

    return {
      series
    };
  }

}
