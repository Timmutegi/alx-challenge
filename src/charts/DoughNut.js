import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Doughnut,
  data: () => ({
    options: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          usePointStyle: true
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 90
    }
  }),
  mixins: [reactiveProp],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
