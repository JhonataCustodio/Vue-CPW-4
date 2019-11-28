import http from './config'


import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    list: () => {
        return http.get('/rest/dashboard')
    },
    extends: Line,
    mixins: [reactiveProp],
    props: {
        chartData: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },
    mounted () {

        this.renderChart(this.chartData, this.options)
    }
}