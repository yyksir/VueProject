<template>
  <div class="con">
    <div class="menu_con">
      <div class="menu" @click = "handleClickAllMenu">全部分类<span class="triangle"></span></div>
      <div class="menu middle">全部目的地<span class="triangle"></span></div>
      <div class="menu">推荐排序<span class="triangle"></span></div>
    </div>
    <menu-pop-all :show="show"></menu-pop-all>
  </div>
</template>
<script>
  import MenuPopAll from './menuPopAll'
  export default{
    name: 'travel-menu',
    data () {
      return {
        show: false,
        listAll: [],
        destinations: [],
        recomends: []
      }
    },
    components: {
      MenuPopAll
    },
    methods: {
      handleClickAllMenu () {
        this.show = !this.show
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .con
    position: relative
  .menu_con
    overflow: hidden
    border-bottom: 1px solid #ccc
  .middle
    border-left: 1px solid #ccc
    border-right: 1px solid #ccc
  .menu
    width: 33%
    height: .88rem
    line-height: .88rem
    text-align: center
    float: left
  .triangle
    top: .34rem
    right: .2rem
    content: "\0020"
    width: 0;
    height: 0;
    border-left: .08rem solid transparent
    border-right: .08rem solid transparent
    border-top: .1rem solid #333
    margin-left: .08rem
    display: inline-block
    vertical-align: middle
  .triangle:before
    content: ''
    display: inline-block
    height: 100%
    width:0
    vertical-align: middle
</style>
