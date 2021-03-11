import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { testsAndDeathsSummaryOptions } from './tests-deaths-summary.constant';
import * as Highcharts from 'highcharts';
import { ChartData, DataService, TestsDeathSummary } from '../../services/data.service';

@Component({
  selector: 'app-tests-death-summary',
  templateUrl: './tests-death-summary.component.html',
  styleUrls: ['./tests-death-summary.component.scss']
})
export class TestsDeathSummaryComponent implements OnInit, OnChanges {

  public summary: TestsDeathSummary;

  @Input() state: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.setSummary();
  }

  ngOnInit(): void {
    this.setSummary();
  }

  private setSummary(): void {
    this.dataService.getTestsDeathSummary({
      state: this.state
    }).subscribe((summary: TestsDeathSummary) => {
      this.summary = summary;

      const chartData = this.toChartData(summary);
      const options: Highcharts.Options = testsAndDeathsSummaryOptions;
      options.series = chartData.series;
      Highcharts.chart(options);
    });
  }

  private toChartData(summary: TestsDeathSummary): ChartData {
    // const data = [summary.testRate, summary.deathRate, summary.casesRate];
    const data = [summary.testRate, summary.deathRate, (summary.casesRate) * 0.7 ];
    const series: Highcharts.SeriesBarOptions[] = [{
      name: 'Count',
      type: 'bar',
      colorByPoint: true,
      data
    }];
    return {
      series
    };
  }

}
