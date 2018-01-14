<template>
  <div class="myselfplace">
    <div class="mylocation" @click="handlePlaceBtnClick">
      北京
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-myselfplace',
    methods: {
      handlePlaceBtnClick: function () {
        this.style.border = 'red'
      }
    },
    wathch: {
      list () {
        console.log(this.list)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .myselfplace
    display: flex
    height: 1.07rem
    border-top: .02rem solid #dee3e7
    border-bottom: .02rem solid #dee3e7
    align-items: center
    padding-left: .2rem
    line-height: 1.07rem
    background: #fff
    color: #636163
    .mylocation
      width: 1.94rem
      height: .5rem
      line-height: .5rem
      border: .02rem solid #00aec6
      text-align: center
      color: #00b2ce
</style>
