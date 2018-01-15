<template>
	<div class="box3">
		<div class="header"> 
			<div class="header1"></div>
			<h2>购票须知</h2>
		</div>
		<div class="reserve">
			<div class="reserve1">
				<div class="iconfont txt">&#xe636;</div>
				<h2>预定说明</h2>
			</div>
			<div class="reserve2">
				<h2>有效期：</h2>
				<h3>游玩日期当天有效</h3>
			</div>
			<div class="reserve3">
				<h2>提前预定时间：</h2>
				<h3>需要在游玩当天的13:30前预定</h3>
			</div>  
		</div>
		<div class="inform">
			<div class="inform1">
				<div class="iconfont txt">&#xe690;</div>
				<h2>入园须知</h2>
			</div>
			<div class="inform2">
				无需换票，快速入园
			</div>
			<div class="inform3">
				<h2>入园方式</h2>
				<h3>凭身份证在凭下单时所留的二代身份证至故宫午门入口快速检票验证入院参观直接验证入园</h3>
			</div>
			<div class="time">
				<h2>景区开放时间</h2>
				<h3>4月 ~ 10月 ： 08:30 ~ 17:00 ， 16:10 停止入园</h3>
				<h3>11月 ~ 3月 ： 08:30 ~ 16:30 ， 15:40 停止入园</h3>
			</div>
		</div>
		<div class="refund">
			<div class="refund1">
				<div class="iconfont txt">&#xe690;</div>
				<h2>退款说明</h2>
			</div>
			<div class="refund2">
				<div class="refund3">
					<div class="iconfont txt">&#xe658;</div>
					<h2>条件退：使用日期开始前当天19:00前可申请退款，多张票的订单，不支持部分退款</h2>
				</div>
				<div class="refund3">
					<div class="iconfont txt">&#xe636;</div>
					<h2>条件退：使用日期开始前当天19:00前可申请退款，多张票的订单，不支持部分退款</h2>
				</div>
				<div class="refund3">
					<div class="iconfont txt">&#xe636;</div>
					<h2>条件退：使用日期开始前当天19:00前可申请退款，多张票的订单，不支持部分退款</h2>
				</div>
			</div>
		</div>		
		<div class="money">
			<div class="money1">
				<div class="iconfont txt">&#xe606;</div>
				<h2>费用说明</h2>
			</div>
			<div class="money2">
				<h2>儿童没有实体身份证也要留自己的身份证号码，进院报身份证号码。不要重复留大人的身份证号码。</h2>
				<h2>成人故宫门票一张（不包含钟表馆、珍宝...）</h2>
			</div>
		</div>
		<div class="more" @click="handleClick">
			<h2>更多购票须知</h2>
			<div class="iconfont">&#xe62e;</div>
		</div>
	</div>
</template>
	
<script>
  export default {
    name: 'hint',
    methods: {
      handleClick () {
        var box = document.getElementsByClassName('box3')
        console.log(box.offsetHeight)
      }
    }
  }
</script>
 
<style lang='stylus' scoped>
	.box3
		height: 15.4rem
		display: flex
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
		.reserve
			display: flex
			flex-direction: column
			justify-content: space-around
			width: 6.82rem
			height: 2.2rem
			margin: 0 auto 
			.reserve1
				display: flex
				.txt
					font-size: .34rem
					color: #ff8200
				h2
					font-size: .26rem
					color: #ff8200
					margin-left: .1rem
			.reserve2
				display: flex
				margin-left: 0.3rem
				h2
					font-weight: 600		
			.reserve3
				display: flex
				margin-left: 0.3rem				
				h2
					font-weight: 600	
		.inform
			height: 5.5rem
			width: 6.82rem			
			margin: 0 auto
			.inform1
				display: flex
				.txt
					font-size: .34rem
					color: #ff8200
				h2
					font-size: .26rem
					color: #ff8200
					margin-left: .1rem
			.inform2
				width: 5.8rem
				height: .6rem
				line-height: .6rem
				color: #fb8009
				margin: .22rem 0 .22rem .36rem
				padding-left: .2rem
				background: #fefbf6
			.inform3
				width: 6rem
				height: 1.56rem
				margin: 0 auto
				h2
					font-size: .28rem
					font-weight: 600
					color: #1a1a1a
				h3
					font-size: .26rem
					line-height: .4rem
					margin-top: .3rem
					color: #353535
			.time
				width: 6rem
				height: 2.5rem
				margin: 0 auto
				h2
					font-size: .28rem
					font-weight: 600
					margin-bottom: .3rem
					color: #1a1a1a	
				h3
					font-size: .28rem
					line-height: .4rem
					margin-bottom: .1rem					
					color: #353535
		.refund
			height: 3.67rem
			width: 6.82rem			
			margin: 0 auto 
			.refund1
				display: flex
				margin-bottom: .24rem
				.txt
					font-size: .34rem
					color: #ff8200
				h2
					font-size: .26rem
					color: #ff8200
					margin: .05rem 0 0 .1rem
			.refund2
				height: 3.3rem
				margin: 0 auto
				width: 6rem
				.refund3
					display: flex
					height: 1rem
					.txt
						color: #575757
						margin-top: .05rem
					h2
						font-size: .26rem
						line-height: .42rem
						margin-left: .1rem
		.money
			height: 2.3rem
			width: 6.82rem		
			margin: 0 auto 
			.money1
				display: flex
				.txt
					font-size: .34rem
					color: #ff8200
				h2
					font-size: .26rem
					color: #ff8200
					margin: .05rem 0 0 .1rem
			.money2
				width: 6rem
				margin: .1rem auto 0
				h2
					line-height: .4rem	
		.more
			height: .6rem
			width: 6.82rem			
			margin: 0 auto
			display: flex
			font-size: .3rem
			justify-content: center
			align-items: center	
</style>