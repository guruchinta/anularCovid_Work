import { Options } from 'highcharts';

export const overallSummaryOptions: Options = {
  chart: {
    renderTo: 'overall-summary',
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
