<template>
  <div class="header" id="header">
    <router-link to="/">
      <div class="back-re iconfont">&#xe624;</div>
    </router-link>
    <div class="chinaiotab">
      <div class="chinaIO">
        <div class="chinaI china-re" @click="handleBtnClickleft">国 内</div>
        <div class="chinaO china-re" @click="handleBtnClickright">国 外</div>
      </div>
    </div>
    <div class="flex-null back-re"></div>
  </div>
</template>

<script>
  export default {
    name: 'index-header',
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleBtnClickleft: function () {
        console.log('一我被触发了')
      },
      handleBtnClickright: function () {
        console.log('二我被触发了')
      },
      handleScroll: function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var headerFixed = document.getElementById('header')
        var CeilingHeader = 0.9
        console.log(scrollTop)
        if (scrollTop >= CeilingHeader) {
          headerFixed.style.top = '0'
          headerFixed.style.position = 'fixed'
        } else {
          headerFixed.style.position = ''
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .header
    width: 100%
    height: .98rem
    line-height: .98rem
    background: $bgColorl
    color: #fff
    .back-re
      width: .58rem
      float: left
      text-align: center
      font-size: .4rem
      font-weight: bold
      color: #fff
    .chinaiotab
      display: flex
      width: 3.66rem
      height: .5rem
      padding: .16rem 1.14rem
      float: left
      .chinaIO
        display: flex
        width: 4.06rem
        height: .6rem
        font-size: .26rem
        border: .02rem solid #fff
        .chinaI
          border-right: .02rem solid #fff
          background: #fff
          color: #00aec6
      .china-re
        width: 2rem
        height: .6rem
        color: #fff
        line-height: .6rem
        text-align: center   
</style>
