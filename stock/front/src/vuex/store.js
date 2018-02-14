import Vue from 'vue'
import Vuex from 'vuex'
import Stock from './modules/stock'

Vue.use(Vuex)

export default new Vuex.Store({ modules: { Stock } })
