<template>
  <div class="header">
  	<div class="back iconfont">&#xe624;</div>
  	<div class="search">
  		<span class="iconfont searck-icon">&#xe632;</span>请输入城市...
  	</div>
  	<div class="city">北京</div>
  </div>
</template>

<script>
  export default {
    name: 'index-header'
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'
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
  		.searck-icon
  			position: relative
  			top: .02rem
  			padding-right: .04rem
  	.city
  		padding-right: .6rem
  		
</style>