<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音"/>
  </div>
</template>

<script>
export default {
  name: 'index-search'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .search
    display: flex
    height: .76rem
    padding-left: 0.2rem
    line-height: .66rem
    background: #00aec6
    .search-input
      width: 6.88rem
      height: .68rem
      border: 0
      text-align: center
      font-size: .26rem
      line-height: .63rem
      background: #fff
      border-radius: .1rem
      color: #8c8a8c
</style>
