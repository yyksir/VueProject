<template>
	<div class="reserve">
		<div class="reserve1">
			<h2>价格</h2>   
			<h3>￥40</h3>
		</div>
		<div class="reserve2">立即预定</div>		
	</div>
</template>
	
<script>
  export default {
    name: 'reserve'
  }
</script>
 
<style lang='stylus' scoped>
	.reserve
		display: flex
		height: .88rem
		border: 1px solid #e0e0df
		justify-content: space-between
		.reserve1
			display: flex			
			width: 1.8rem
			height:.88rem
			line-height: .88rem
			justify-content: center
			h2
				font-size: .26rem
				color: #7f7f7f
			h3
				font-size: .36rem
				color: #ff7d00	
		.reserve2
			width: 3.15rem
			height: .88rem
			line-height: .88rem
			text-align: center
			background: #ff7d00
			color: #fff
			font-size: .3rem
</style>