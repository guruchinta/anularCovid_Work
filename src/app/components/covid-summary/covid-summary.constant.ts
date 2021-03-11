import { Options } from 'highcharts';

export const covidSummaryOptions: Options = {
  chart: {
    renderTo: 'covid-summary',
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y}</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.y} ({point.percentage:.1f} %)'
      }
    }
  },
  series: []
};
