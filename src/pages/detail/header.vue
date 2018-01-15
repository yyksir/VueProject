<template>
  <div class="detailHeader">
  	<div class="header-back">
  			<span class="back iconfont">&#xe624;</span> 
  	</div>
  	<div class="header-figure">
  		<img class="place-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg">
  	</div>
  	<div class="header-figure-info">
  		<div class="mp-headfeagure-title">故宫(AAAAA景区)</div>
  		<div class="my-imgswipericon">
  			<span class="iconfont pic ">&#xe729;</span><em>10</em>
  		</div>
  	</div>
  
  </div>
</template>

<script>
  export default {
    name: 'index-header'
  }
</script>

<style lang="stylus" scoped>
	.detailHeader
		width: 100%
		position: relative
		.header-back
			position: absolute
			left: 0.1rem
			top: 0.1rem
			height: 0.72rem
			background-color: #000
			opacity: 0.5
			border-radius: 0.36rem
			width: 0.72rem
			.back
				color: #fff
				font-weight: 700
				text-align: center
				display: inline-block
				position: absolute
				left: .18rem
				top: .2rem
				font-size: .36rem
		.header-figure
			overflow:hidden
			height: 0
			width: 100%
			padding-bottom: 55%
			.place-img
				width: 100%
				vertical-align: top
		.header-figure-info
			position: absolute
			right: .2rem
			bottom: .26rem
			left: .2rem
			min-height: .4rem
			.mp-headfeagure-title
				position: relative
				z-index: 1
				margin-right: 1.4rem
				lin-height: .4rem
				color: #fff
				font-size: .32rem
				text-shadow: 0 1px 2px rgba(0,0,0,0.70)
			.my-imgswipericon
				position: absolute
				right: 0
				top: 0
				width: 1.2rem
				height: .4rem
				background: rgba(0,0,0,.5)
				border-radius: .2rem
				font-size: .24rem
				color: #fff
				line-height: .4rem
				text-align: center
				.pic
					line-height:1
					font-size: .18rem
					padding-right: .1rem




</style>