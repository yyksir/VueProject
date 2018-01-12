<template>
  <div class="header">
    <div class="back-re iconfont">&#xe624;</div>
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
    methods: {
      handleBtnClickleft: function () {
        console.log('一我被触发了')
      },
      handleBtnClickright: function () {
        console.log('二我被触发了')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .header
    display: flex
    height: .98rem
    line-height: .98rem
    background: #00aec6
    color: #fff
    .back-re
      width: .58rem
      text-align: center
      font-size: .4rem
      font-weight: bold
    .chinaiotab
      display: flex
      width: 3.66rem
      height: .5rem
      padding: .16rem 1.14rem
      .chinaIO
        display: flex
        width: 4.06rem
        height: .62rem
        font-size: .26rem
        border: .02rem solid #fff
        .chinaI
          border-right: .02rem solid #fff
      .china-re
        width: 2rem
        height: .6rem
        color: #fff
        line-height: .6rem
        text-align: center   
</style>
