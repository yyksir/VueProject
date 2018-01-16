import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Details from '@/pages/details'
=======
import Index from '@/pages/index'
import City from '@/pages/city'
import DayTrip from '@/pages/daytrip'
import Detail from '@/pages/detail'
>>>>>>> origin/20180111-index-yyksir

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/details',
      name: 'Details',
      component: Details
=======
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
>>>>>>> origin/20180111-index-yyksir
    }
  ]
})
