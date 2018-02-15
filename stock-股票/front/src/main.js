import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueHighcharts from 'vue-highcharts'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './vuex/store'
import './index.scss'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue(Vue.util.extend({ router, store }, App)).$mount('#app')
