<template>
	<div class="box4">
		<div class="message">
			<div class="header"> 
				<div class="header1"></div>
				<h2>景区信息</h2>
			</div>
			<div class="message1">
				<div class="message2">
					<div class="iconfont txt">&#xe66f;</div>
					<h2>故宫（5A）</h2>
				</div>
				<div class="message3">
					<div class="iconfont txt">&#xe66f;</div>
					<h2>天安门广场（5A）</h2>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
  export default {
    name: 'message'
  }
</script>

<style lang='stylus' scoped>
	.box4
			height: 2.1rem
			background: #f7f7f7
			padding-top: .2rem
			.message
				height: 1.9rem			
				display: flex
				background: #fff				
				flex-direction: column
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
				.message1
						display: flex
						align-items: center
						width: 6.82rem
						height: 0.4rem
						margin: .3rem auto 0
						.message2
							display: flex					
							width: 2.2rem
							justify-content: space-around
							border-right: 1px solid #ccc
							.txt
								font-size: .28rem
								color: #bcbebb
							h2
								font-size: .28rem
								color: #222222
						.message3
							display: flex					
							width: 3rem
							justify-content: space-around
							.txt
								font-size: .28rem
								color: #bcbebb
							h2
								font-size: .28rem
								color: #222222
</style>