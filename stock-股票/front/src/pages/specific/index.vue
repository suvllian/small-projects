<template>
  <div class="stock-table">
    <div class="stock-datepicker">
      <router-link :to="{ path: '/' }">
        <el-button type="primary" size="small">返回</el-button>
      </router-link>
    </div> 
    <el-table :data="data" v-loading="loading" stripe border>
      <el-table-column sortable prop="code" label="股份代号" />
      <el-table-column prop="name" label="股份名称" />
      <el-table-column sortable prop="amount" label="中央结算系统的持股量" width="200" />
      <el-table-column sortable prop="proportion" label="占上交所上市及交易A股总数的百分比" width="300">
        <template slot-scope="scope">
          <span>{{`${scope.row.proportion/100}%`}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="dateT" label="日期">
        <template slot-scope="scope">
          <span>{{`${scope.row.date.getFullYear()}-${scope.row.date.getMonth()+1}-${scope.row.date.getDate()}`}}</span>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <div id="stock"></div>
    </div>
  </div>
</template>

<script>
import api from '../../api'
import moment from 'moment'
import HighCharts from 'highcharts'

export default {
  data () {
    return {
      id: 'stock',
      initKey: 1,
      option: {
        chart: { type: 'line' },
        title: { text: '持仓量变动情况' },
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5'  ],
        xAxis: { categories: [] },
        yAxis: {
          title: { text: '持股量' }
        },
        plotOptions: {
          column: {
            colorByPoint:true
          }
        },
        series: [{ name: '', data: [] }]
      },
      code: 0,
      loading: false,
      data: []
    }
  },
  methods: {
    getData () {
      const { code } = this.$route.query
      let dateArray = [], stockArray = []
      this.code = code
      this.loading = true
      api.getMethod('getSpecific', { code }).then(res => {
        this.data = res.map(item => {
          const { dateT, amount, proportion } = item
          dateArray.push(moment(parseInt(dateT)).format('YYYY-MM-DD'))
          stockArray.push(parseInt(amount))

          item.amount = parseInt(amount)
          item.proportion = parseInt((proportion.slice(0, -1) * 100).toFixed(0))
          item.date = new Date(parseInt(dateT))
          return item
        })
        this.option.xAxis.categories = dateArray
        this.option.series[0] = {
          name: res[0].name, data: stockArray
        }
        this.initKey = this.initKey + 1
        this.loading = false
      })
    }
  },
  created () {
    this.getData()
  },
  mounted() {
    HighCharts.chart('stock', this.option)
  },
  updated() {
    HighCharts.chart('stock', this.option)
  }
}
</script>
