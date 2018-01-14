<template>
	<div class="recommend">
		<div class="recommend1">
			<div class="header"> 
				<div class="header1"></div>
				<h2>相关推荐</h2>
			</div>
			<div class="content">
				<dl v-for="item of list">
					<dt><img :src="item.imgUrl" alt="" /></dt>
					<dd>{{item.name}}</dd>
					<h2>{{item.money}}</h2>
					<h3>查看 ></h3>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'recommend',
    props: {
      list: Array
    }
  }
</script>
 
<style lang='stylus' scoped>
	.recommend
		height: 12.4rem
		background: #f7f7f7
		.recommend1
			height: 12.2rem
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
			.content
				display: flex
				justify-content: space-between
				flex-wrap: wrap
				height: 11.15rem
				width: 6.82rem				
				margin: 0 auto
				dl
					width: 3.35rem
					height: 3.5rem
					border: 1px solid #e6e5e3
					dt
						img
							width: 3.35rem
							height: 1.85rem
					dd
						width: 2.8rem
						height: .76rem
						line-height: .38rem
						font-size: .26rem
						color: #282828
						margin: .12rem auto 0
					h2
						font-size: .32rem
						color: #f28526
						float: left
						margin: .2rem 0 0 .2rem
					h3
						font-size: .3rem
						color: #f28526
						float: right
						margin: .2rem .2rem 0 0
</style>