<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pageList" :key="index" >
        <div class="icons-con">
          <div class="icons-item" v-for="item of page" :key="item.id">
            <router-link to="/detail">
              <img class="icons-img" :src="item.imgUrl">
              <p class="icons-desc">{{item.title}}</p>
            </router-link>
          </div>   
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div> 
    </swiper>
  </div>
</template>


<script>
	export default {
  name: 'index-icons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pageList () {
      const pages = []
      this.list.forEach((value, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons
    overflow: hidden
    height: 3.8rem
    .icons-con
      display: flex
      flex-wrap: wrap
      .icons-item
        width: 25%
        height: 1.9rem
        .icons-img
          display: block
          margin: 0.3rem auto 0.2rem
          width: .99rem
          height: .99rem
        .icons-desc
          overflow: hidden
          white-space: nowrap
          text-overflow: elipsis
          line-height: .4rem
          text-align: center





</style>