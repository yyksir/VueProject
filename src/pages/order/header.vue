<template>
  <div class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="order-write">订单填写</div>
    <div class="login">登录</div>
  </div>
</template>

<script>

export default {
  name: 'OrderHeader'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stytus/varibles.styl";
  .header
    display: flex
    height: 1.3rem
    line-height: 1.3rem
    background: $bgColor
    color: #fff
    .back
      padding-left .3rem
      font-size: .4rem      
    .order-write
      flex: 1
      text-align: center
      font-size: .4rem
      height: .6rem
    .login
      padding: 0 .6rem 0 .2rem
      font-size: .4rem     
</style>