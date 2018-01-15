<template>
	<div class="supplier">
		<div class="supplier1">
			<div class="header"> 
				<div class="header1"></div>
				<h2>供应商 ： 北京直营</h2>
			</div>
			<h3>
				消费者成功预定门票并按产品规定使用，出游当天无法按照原订单入园，联系供应商（或去哪儿网）后10分
			</h3>
			<div class="supplier2">
				<div class="iconfont">&#xe62e;</div>
			</div>
		</div>	
	</div>
</template>

<script>
  export default {
    name: 'supplier'
  }
</script>

<style lang='stylus' scoped>
	.supplier
		height: 2.8rem
		background: #f7f7f7
		.supplier1
			height: 2.6rem
			background: #fff
			.header
				display: flex
				align-items: center
				width: 6.82rem
				height: 0.89rem
				border-bottom: 1px solid #e5e5e5
				margin: 0 auto 
				.header1
					width: .08rem
					height: .3rem
					background: #00bfd1
				h2
					font-size: .28rem
					color: #171717
					margin-left: .1rem
			h3
				display: flex
				align-items: center
				width: 6.82rem
				height: 0.89rem
				line-height: .4rem
				margin: .2rem auto 0 
			.supplier2
				text-align: center
				margin-top: .26rem
</style>