<template>
  <div class="search">
    <input class="search-input">输 入 城 市 名 或 拼 音</input>
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
    text-align: center
    .search-input
      width: 6.88rem
      height: .68rem
      font-size: .26rem
      line-height: .63rem
      background: #fff
      border-radius: .1rem
      color: #8c8a8c
</style>
