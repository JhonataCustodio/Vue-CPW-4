<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>Dashboard
                    <small class="text-muted"> | resumo</small>
                </h3>
            </div>
        </b-row>
        <div class="container">
           <LineChart
               :chart-data="datacollection"></LineChart>
        </div>
    </div>
</template>

<script>
    import {BRow} from 'bootstrap-vue'
    import LineChart from '../services/dashboard'


    export default {
        name: 'dashboard',
        components: {
            BRow,
            LineChart
        },
        data() {
            return {
                datacollection: null,
                loaded: false
            }
        },
        mounted(){
            this.fillData()
        },
        methods: {
            fillData(){
                this.datacollection = {
                    labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
                    datasets: [
                        {
                            label: 'Total vendas por mês - ano 2019 ',
                            backgroundColor: 'rgba(255,0,0,0.2)',
                            borderColor: 'red',
                            pointBackgroundColor: 'red',
                            borderWidth:1,
                            pointBorderColor: 'black',
                            data:[147348,186947,99604,66263,87716,121339,59334,32008,24161,6119,146694,49903]
                        }
                    ]
                }
            }
        }

    }
</script>

<style scoped>

</style>

