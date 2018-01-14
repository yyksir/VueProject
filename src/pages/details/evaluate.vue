<template>
	<div class="box">
		<div class="content">
			<div class="left">
				<div class="iconfont ali">&#xe601;</div>
				<div class="center">
					<div class="iconfont huang">&#xe60c;</div>
					<div class="iconfont huang">&#xe60c;</div>
					<div class="iconfont huang">&#xe60c;</div>
					<div class="iconfont huang">&#xe60c;</div>
					<div class="iconfont">&#xe641;</div>
				</div>				
				<h2>4.0分</h2>
			</div>
			<div class="right">
				2396条评论  >
			</div>
		</div>
	</div>
</template>
	
<script>
  export default {
    name: 'evaluate'
  }
</script>
 
<style lang='stylus' scoped>
	.box
		height: 1.0rem
		padding-top: .2rem
		background: #f7f7f7
		.content
			display: flex
			height: .85rem
			justify-content: space-between
			align-items: center
			padding-left: 0.1rem
			padding-right: 0.25rem
			background: #fff
			.left
				display: flex
				width: 3.05rem
				justify-content: space-around				
				.center
					display: flex
					width: 1.65rem
					justify-content: space-around
					.huang
						color: yellow
				.ali
					color: #65b5d6
			.right	
				font-size: .28rem
				color: #939393
</style>