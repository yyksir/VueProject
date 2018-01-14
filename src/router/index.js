import Vue from 'vue'
import Router from 'vue-router'
import order from '@/pages/order/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
