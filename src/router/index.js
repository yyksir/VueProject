import Vue from 'vue'
import Router from 'vue-router'
import order from '@/pages/order/index.vue'
import Details from '@/pages/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})
