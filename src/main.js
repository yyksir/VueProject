// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
<<<<<<< HEAD
import 'assets/css/reset.css'
import 'assets/css/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
=======
import './assets/css/reset.css'
import './assets/css/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import store from '@/store/store'
>>>>>>> origin/20180111-index-yyksir

FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
<<<<<<< HEAD
=======

>>>>>>> origin/20180111-index-yyksir

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
