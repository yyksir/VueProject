<template>
	<div class="comment">
		<div class="comment1">
			<div class="header"> 
				<div class="header1"></div>
				<h2>用户评论</h2>
			</div>
			<div class="comment2">
				<div class="comment3">
					<div class="xing">
						<div class="iconfont huang">&#xe60c;</div>
						<div class="iconfont huang">&#xe60c;</div>
						<div class="iconfont huang">&#xe60c;</div>
						<div class="iconfont huang">&#xe60c;</div>
						<div class="iconfont huang">&#xe641;</div>
					</div>
					<h2>wawdf  2018-1-13</h2>
				</div>
				<div class="text">
					故宫很美，比想象中的要美要大，沿着总轴线一直走就好了,时间大约要两三个小时
				</div>
				<div class="image">
					<img src="http://p4-q.mafengwo.net/s9/M00/17/46/wKgBs1gN12CAP-DpAAETGYtmDsA34.jpeg?imageMogr2%2Fthumbnail%2F%21320x170r%2Fgravity%2FCenter%2Fcrop%2F%21320x170%2Fquality%2F100" alt="" />
				</div>
			</div>
			<div class="comment2">
				<div class="comment3">
					<div class="xing">
						<div class="iconfont huang">&#xe60c;</div>
						<div class="iconfont huang">&#xe60c;</div>
						<div class="iconfont huang">&#xe60c;</div>
						<div class="iconfont huang">&#xe60c;</div>
						<div class="iconfont huang">&#xe641;</div>
					</div>
					<h2>wawdf  2018-1-13</h2>
				</div>
				<div class="text">
					故宫很美，比想象中的要美要大，沿着总轴线一直走就好了,时间大约要两三个小时
				</div>
				<div class="image">
					<img src="http://p4-q.mafengwo.net/s9/M00/17/46/wKgBs1gN12CAP-DpAAETGYtmDsA34.jpeg?imageMogr2%2Fthumbnail%2F%21320x170r%2Fgravity%2FCenter%2Fcrop%2F%21320x170%2Fquality%2F100" alt="" />
				</div>
			</div>
			<div class="more">
				查看更多评论 >
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
	.comment
		height: 8.9rem
		background: #f7f7f7
		.comment1
			height: 8.7rem
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
			.comment2
				height: 3.39rem
				width: 6.85rem
				margin: 0 auto
				border-bottom: 1px dashed #616161
				.comment3
					display: flex
					height: .7rem
					justify-content: space-between
					align-items: center
					.xing
						display: flex
						.huang
							color: yellow
				.text
					height: .8rem
					font-size: .28rem
					color: #616161
					line-height: .4rem
					overflow: hidden
					text-overflow: ellipsis
				.image
					height: 1.6rem
					margin-top: .1rem
					img
						width: 1.6rem
						height: 1.6rem
			.more
				height: .9rem
				text-align: center
				line-height: .9rem
				border-top: 1px solid #616161			
</style>