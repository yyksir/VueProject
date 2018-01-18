import Vue from 'vue'
import Router from 'vue-router'
import Details from '@/pages/details'
import Travel from '@/pages/travel/travel'
import Index from '@/pages/index'
import City from '@/pages/city'
import DayTrip from '@/pages/daytrip'
import Detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/details',
      name: 'Details',
      component: Details
    }, {
      path: '/travel',
      name: 'Travel',
      component: Travel
    }, {
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
