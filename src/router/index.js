import Vue from 'vue'
import Router from 'vue-router'
import Details from '@/pages/details'
import Travel from '@/pages/travel/travel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/travel',
      name: 'Travel',
      component: Travel
    }
  ]
})
