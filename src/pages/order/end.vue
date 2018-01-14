<template>
  <div class="end">
      <div class="left">
          <h2>产品价格¥</h2><h3>50</h3><span>∧</span>
      </div>
      <div class="right">
          提交订单
      </div>
      <div calss="box">
          fsdgt
      </div>
  </div>
</template>

<script>

export default {
  name: 'OrderEnd'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stytus/varibles.styl";
  .end
    position: relative
    display: flex
    flex-direction: row
    z-index: 4
    width: 11rem
    height: 2rem
    border-top: 1px solid #ccc
    background: green
    .left
      display: flex
      width: 50%
      background: #fff
      text-align: center
      line-height: 2rem 
      h2
        padding-left: .7rem
        padding-top: .05rem
        font-size: .47rem
        color: #ff9700
      h3
        font-size: .7rem
        color: #ff9700
      span
        font-size: .7rem
    .right
      width: 50%
      background: #ff9700
      text-align: center
      line-height: 2rem
      font-size: .47rem
      color: #fff
    .box
      positon: absolute
      width: 7rem
      height: 3rem
      left: 0
      top: 0
      z-index: 6
      background: red
</style>