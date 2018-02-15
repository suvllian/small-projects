import Vue from 'vue'
import Router from 'vue-router'
import Daily from '@/pages/daily/index.vue'
import Classify from '@/pages/classify/index.vue'
import Add from '@/pages/add/index.vue'
import Login from '@/pages/login/index.vue'
import List from '@/pages/list/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'daily',
      component: Daily
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
