import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    // var ctx = document.getElementById('line-chart').getContext('2d')

    // var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0)
    // gradientStroke.addColorStop(0, '#109cf1')
    // gradientStroke.addColorStop(1, '#f49080')

    this.renderChart(this.chartData, this.options)
  }
}
