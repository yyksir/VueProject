<template>
  <div class="myselfplaceBig">
    <div class="myselfplace">
      <div class="mylocation">
        北京
      </div>
      <div class="mylocation">
        北京
      </div>
      <div class="mylocation">
        北京
      </div>
    </div>
    <div class="myselfplace">
      <div class="mylocation">
        北京
      </div>
      <div class="mylocation">
        北京
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-myselfplaceBig'
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .myselfplaceBig
    display: flex
    flex-wrap: wrap
    justify-content: flex-start
    align-items: center
    min-height: 1.07rem
    padding: .24rem 0 0.24rem 0
    border-top: .02rem solid #dee3e7
    border-bottom: .02rem solid #dee3e7
    background: #fff
    .myselfplace
      display: flex
      height: .82rem
      justify-content: center
      align-items: center
      background: #fff
      .mylocation
        width: 1.94rem
        height: .54rem
        margin: 0 .24rem 0
        border: .02rem solid #cecfce
        border-radius: 0.12rem 
        line-height: .54rem
        text-align: center
        color: #212021
</style>
