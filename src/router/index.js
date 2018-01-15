import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import City from '@/pages/city'
import DayTrip from '@/pages/daytrip'
import Detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/daytrip',
      name: 'DayTrip',
      component: DayTrip
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
