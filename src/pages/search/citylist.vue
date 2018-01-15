<template>
<div>
  <div v-for="(item, key) in list" :key="item[0].name">
    <div class="cityclassify">{{key}}</div>
    <div>
      <div class="cityclassify">
        {{item[0].name}}
      </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    name: 'index-citylist',
    props: {
      list: Object
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .cityclassify
    display: flex
    height: .76rem
    padding-left: 0.2rem
    boder-bottom: .01rem
    line-height: .66rem
    color: #636163
  .citylist
    display: flex
    height: .74rem
    padding-left: .2rem
    border-bottom: .02rem solid #e7e7e7
    line-height: .74rem
    background: #fff
    color: #636163
</style>
