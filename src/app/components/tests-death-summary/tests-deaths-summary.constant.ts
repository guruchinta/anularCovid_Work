import { Options } from 'highcharts';

export const testsAndDeathsSummaryOptions: Options = {
  chart: {
    renderTo: 'tests-death-summary',
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'bar'
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y}</b>'
  },
  credits: {
    enabled: false
  },
  xAxis: {
    categories: ['Tests', 'Deaths', 'Total Cases'],
    title: {
      text: null
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: false,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.y}'
      }
    }
  },
  legend: {
    enabled: false
  },
  series: []
};
