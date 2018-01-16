<template>
  <div class="header">

    <div class="back iconfont">&#xe624;</div>
    <div class="search">
      <span class="iconfont search-icon">&#xe632;</span>请输入搜索内容
    </div>
    <div class="city" @click="handleCityClick">
      {{doubleCity}}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'index-header',
  computed: {
    ...mapGetters(['doubleCity'])
  },
  methods: {
    handleCityClick () {
      this.$router.push('/city')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .header
    display: flex
    height: .88rem
    line-height: .88rem
    background: $bgColor
    color: #fff
    .back
      width: .58rem
      text-align: center
      font-size: .4rem
      font-weight: bold
    .search
      flex: 1
      height: .6rem
      line-height: .6rem
      margin: .14rem .2rem
      padding-left: .4rem
      background: #fff
      border-radius: .1rem
      color: #ccc
      .search-icon
        position: relative
        top: .02rem
        padding-right: .04rem
    .city
      padding-right: .6rem
      position: relative
      &:before
        position: absolute
        top: .34rem
        right: .2rem
        content: "\0020"
        width: 0;
        height: 0;
        border-left: .14rem solid transparent;
        border-right: .14rem solid transparent;
        border-top: .14rem solid #fff;
</style>
