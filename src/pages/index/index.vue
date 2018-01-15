<template>
  <div>
    <index-header :city="city"></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <IndexIcons :list="icons"></IndexIcons>
    <div class="position-con">
      <div class="position-fail">
        <span class="iconfont">&#xe6ed;</span>
        <span class="position-desc">定位失败</span>
      </div>
      <div class="hot-spring">
        <span class="iconfont global">&#xe639;</span>
        <span class="hot-spring-desc">5折泡温泉</span>
      </div>
    </div>
    <index-recommend :sights="sights"></index-recommend>
    </div>

</template>

<script>
  import IndexHeader from './header'
  import IndexSwiper from './swiper'
  import IndexIcons from './icons'
  import IndexRecommend from './recommend'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSwiper,
      IndexIcons,
      IndexRecommend
    },
    data () {
      return {
        city: '',
        swiperInfo: [],
        icons: [],
        sights: []
      }
    },
    methods: {
      getIndexData () {
        const city = localStorage.city ? localStorage.city : '北京'
        axios.get('/api/index.json?city=' + city)
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.icons = data.iconsList
        this.city = data.city
        this.sights = data.sights
        localStorage.city = data.city
      },
      handleGetDataErr () {
        console.log('error')
      },
      bindEvents () {
        this.$bus.$on('change', this.handleCityChange.bind(this))
      },
      handleCityChange (value) {
        this.city = value
        this.getIndexData()
      }
    },
    created () {
      this.getIndexData()
      this.bindEvents()
    }
  }
</script>

<style lang="stylus" scoped>
.position-con
  height: 1rem
  width: 100%
  border-top: 1px solid #dddddd
  line-height: 1rem
  font-size: 0.26rem
  font-weight: 700
  .position-fail
    float: left
    width: 49%
    text-align: center
    border-right: 1px solid #dddddd
  .hot-spring
    float: right
    width: 50%
    text-align: center



</style>
