<template>
 	<div class="header-container">
			<header class="header">
        <router-link to="/">
  				<div class="header-left iconfont">
            &#xe624;
          </div>
        </router-link>
				<div class="header-title">
					<div class="areaSwitch inland select">国内</div>
					<div class="areaSwitch foreign">国外</div>
				</div>
			</header>
	</div>
</template>

<script scoped>
export default {
  name: 'cityHeader'
}
</script>

<style lang="stylus" scoped>
	.header-container
		background: #00bcd4
		height: .88rem
		left: 0
		position: fixed
		top: 0
		width: 100%
		.header
			align-items: center
			background: #00bcd4
			display: flex
			flex-direction: row
			height: .88rem
			justify-content: center
			overflow: hidden
			text-align: center
			.header-left
				color: #fff
				font-size: .4rem
				font-weight: bold
				left: 0
				line-height: .88rem
				position: absolute
				padding: 0 .1rem
				top: 0
				width: .58rem
			.header-title
				color: #fff
				display: flex
				flex-direction: row
				height: .56rem
				width: 4.04rem
				.areaSwitch
					border: 1px solid #fff
					line-height: .54rem
					width: 2rem
				.inland
					border-top-left-radius: 0.1rem
					border-bottom-left-radius: 0.1rem
				.foreign
					border-top-right-radius: 0.1rem
					border-bottom-right-radius: 0.1rem
				.select
					color: #00bcd4
					background: #fff
</style>
