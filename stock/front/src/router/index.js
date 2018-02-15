import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Specific from '@/pages/specific'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/specific',
      name: 'specific',
      component: Specific
    }
  ]
})
