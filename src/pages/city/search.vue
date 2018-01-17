<template>
	<div class="Search-Area">
		<input type="search" placeholder="输入城市名或拼音" class="Search-Input" />
	</div>
</template>

<script>
export default {
  name: 'city'
}
</script>

<style lang="stylus" scoped>
	.Search-Area
		background: #00bcd4
		color: #9e9e9e
		font-size: .26rem
		margin-top: .88rem
		padding: .06rem .2rem .1rem .2rem
		.Search-Input
			border: 0
			border-radius: .06rem
			display: block
			line-height: .3rem
			padding: .16rem 0 .16rem .1rem
			text-align: center
			width: 100%	
</style>