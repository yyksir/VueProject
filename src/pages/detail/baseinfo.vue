<template>
	<div class="my-baseInfo">
		<div class="mp-baseinfo-address">
			<p class="mp-baseinfo-address-txt">
				<span class="iconfont address">&#xe6ed;</span>
				北京市东城区景山前街4号
				<span class="iconfont icon-right">&#xe62d;</span>
			</p>
		</div>
		<a class="mp-baseinfo-intro mp-border-top" href="//touch.piao.qunar.com/touch/sight/introduction.htm?sightId=38170">
			<p class="mp-baseinfo-address-txt">
				<span class="iconfont address">&#xe729;</span>
				查看景点简介及开放时间
				<span class="iconfont icon-right">&#xe62d;</span>
			</p>
		</a>
	</div>
</template>

<script>
  export default {
    name: 'index-baseInfo'
  }
</script>
<style lang="stylus" scoped>
	.my-baseInfo
		position: relative
		top: -.1rem
		padding: .1rem .2rem 0 .2rem
		margin-bottom: .1rem
		border-radius: .1rem .1rem 0 0
		.mp-baseinfo-address
			display: block
			position: relative
			height: .88rem
			color: #212121
			line-height: .88rem
			.mp-baseinfo-address-txt
				overflow: hidden
				padding-right: .56rem
				white-space: nowrap
				text-overflow: elipsis
				.address
					margin-right: .2rem
					color: #9e9e9e
				.icon-right
					position: absolute
					right: 0
					color: #b9b9b9
		.mp-baseinfo-intro
			display: block
			position: relative
			height: .88rem
			color: #212121
			line-height: .88rem
			.mp-baseinfo-address-txt
				overflow: hidden
				padding-right: .56rem
				white-space: nowrap
				text-overflow: elipsis
				.address
					margin-right: .2rem
					color: #9e9e9e
				.icon-right
					position: absolute
					right: 0
					color: #b9b9b9


</style>