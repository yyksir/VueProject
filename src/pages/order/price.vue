<template>
  <div class="price">
      <div class="top">
        <h2>［上午场］故宫成人票+故宫全景</h2><h3>¥50</h3><span>/张</span>  
      </div>
      <div class="center">
          <h4>手绘地图</h4>
          <p>预订须知</p>
      </div>
      <div class="bottom">
          <div class="time">
            <i class="iconfont">&#xe6a9;</i>2018-01-11
          </div>
          <div class="warn iconfont">
            <i class="iconfont">&#xe690;</i>不可退
          </div>  
      </div>
  </div>
</template>

<script>
export default {
  name: 'OrderPrice'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stytus/varibles.styl";
  .price
    height: 2.5rem
    margin-top: .3rem
    background: #fff
    color: black 
    padding-left: .3rem
    padding-right: .3rem
    border-bottom: 1px solid #dfdfdf;
    .top
        display: flex
        height: .84rem
        line-height: .44rem
        font-size: .44rem
        padding-top: .4rem
        h2
            flex: 1
            font-size: .44rem
            margin-right: 1.7rem
        span
            font-size: .44rem
            color: #ff8500
        h3
            font-size: .3rem
    .center
        display:flex
        height: .44rem
        h4
            flex:1
            font-size: .44rem
            line-height: .44rem
        p
            font-size: .44rem
            line-height: .44rem            
            color: #00bcd5 
    .bottom
        display: flex
        height: .36rem
        padding-top: .2rem
        .time
            font-size: .20rem
            line-height: .3rem
            margin-right: .36rem
            i
                padding-right: .2rem
                color: $bgColor
        .warn
            font-size: .20rem
            line-height: .3rem
            i
                padding-right: .2rem
                color: red
                

               
            


            
        

        


</style>