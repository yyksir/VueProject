import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Search from '@/pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/search/:id',
      name: 'search',
      component: Search
    }
  ]
})
