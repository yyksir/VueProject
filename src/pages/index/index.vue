<template>
  <div>
    <index-header></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <IndexIcons :list="icons"></IndexIcons>
    </div>
</template>

<script>
  import IndexHeader from './header'
  import IndexSwiper from './swiper'
  import IndexIcons from './icons'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSwiper,
      IndexIcons
    },
    data () {
      return {
        swiperInfo: [],
        icons: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/index.json')
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.icons = data.iconsList
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style></style>
