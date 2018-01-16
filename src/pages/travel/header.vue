<template>
  <div class = "header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search">
      <span class="iconfont search-icon"></span>请输入内容
    </div>
    <div class="search_txt">搜索</div>
  </div>
</template>

<script>
  export default{
    name: 'travel-header'
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
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
    .search_txt
      padding-right: .5rem
      position: relative
      &:before
        position: absolute
        top: .34rem
        right: .2rem
        content: "\0020"
        width: 0
        height: 0
        border-left: .1rem solid transparent
        border-right: .1rem solid transparent
        border-top: .14rem solid #fff
</style>
