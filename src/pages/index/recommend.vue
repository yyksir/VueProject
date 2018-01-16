<template>
	<div class="recommend-box">
		<div class="hot-recommend">
			<span class="hot-tip">热销推荐</span>
		</div>
		<div class="recommend-container">
			<div class="recommend-item" v-for="item of sights" :key="item.id">
				<img class="recommend-img" :src="item.imgUrl">
				<div class="recommend-place">
					<p>{{item.title}}</p>
					<p class="recommend-desc">{{item.desc}}</p>
					<p class="recommend-price"><span>{{item.price}}</span>起</p>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
  name: 'index-recommend',
  props: ['sights']
}
</script>

<style lang="stylus" scoped>
.recommend-box
	width:100%
	.hot-recommend
		height: 0.8rem
		background-color: #f4f4f4
		line-height: 0.8rem
		.hot-tip
			padding-left: 0.25rem
	.recommend-container
		.recommend-item
			height: 1.39rem
			border-bottom: 1px solid #d7d7d7
			padding: 0.24rem
			.recommend-img
				height: 1.4rem
				width: 1.4rem
				float: left
				margin-right: 0.3rem
			.recommend-place
				line-height: 0.45rem
				.recommend-desc
					color: #b1b1b1
				.recommend-price
					color: #ffa60a




</style>