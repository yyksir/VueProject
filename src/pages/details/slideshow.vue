<template>
<div>	
	<div class="slide-content">
		<swiper :options="swiperOption">
	    	<swiper-slide v-for="item of list" :key="item.id">		
	    			<img class="slide-img" :src="item.imgUrl" alt="" />
	    	</swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	    </swiper>
	    <div class="left">
			<div class="iconfont left1">&#xe624;</div>
		</div>
		<h2>故宫（5A）</h2>
		<div class="right">
			<div class="iconfont right1">&#xe729;</div>
			<h3>3</h3>		
		</div>
	</div>
</div>
</template>

<script>
  export default {
    name: 'slideshow',
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          loop: true,
          pagination: '.swiper-pagination',
          autoplay: 3000,
          autoplayDisableOnInteraction: false
        }
      }
    }
  }
</script>

<style lang='stylus' scoped>
	.swiper-pagination >>> .swiper-pagination-bullet-active
		background: red
	.slide-content
		overflow: hidden
		height: 0
		padding-bottom: 50.6%
		position: relative					
	.slide-img
		width: 100%	    
	.left
		height: .7rem
		line-height: .75rem
		width: .7rem
		text-align: center
		background: #5a6970
		border-radius: 50%
		position: absolute
		top: .1rem
		left: .1rem
		z-index: 99
		.left1
			font-size: .36rem
			color: #fff
			font-weight: 600
	h2
		font-size: .32rem
		color: #fff
		position: absolute
		top: 3.2rem
		left: .2rem
		z-index: 99
	.right
		display: flex
		justify-content: space-around
		width: 1.2rem
		height: .4rem
		line-height: .4rem
		background: rgba(110 110 110 0.5)
		position: absolute
		top: 3.2rem
		right: .2rem
		z-index: 99
		border-radius: .2rem
		.right1
			color: #fff
		h3
			color: #fff	
		
</style>