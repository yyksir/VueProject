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
<<<<<<< HEAD
      name: 'Search',
=======
      name: 'search',
>>>>>>> 758d26ac88a1f1dc826b376426905a0175f06ec4
      component: Search
    }
  ]
})
