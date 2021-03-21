import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        alignment: 'start',
        display: false
      },
      scales: {
        yAxes: [{
          type: 'linear',
          display: true,
          gridLines: {
            borderDash: [10, 6],
            zeroLineColor: 'transparent'
          },
          scaleLabel: {
            display: true,
            fontStyle: 'bold'
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            stepSize: 50,
            beginAtZero: true
          }
        }],
        xAxes: [{
          gridLines: {
            color: '#FFFFFF',
            zeroLineColor: 'transparent'
          }
        }]
      }
    }
  }),
  mixins: [reactiveProp],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
