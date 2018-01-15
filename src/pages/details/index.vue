<template>
	<div class="box">
		<div class="auto">
			<slide-show :list="swiperInfo"></slide-show>
			<evaluate></evaluate>
			<hint></hint>
			<message></message>
			<supplier></supplier>
			<comment></comment>
			<recommend :list="recommend"></recommend>
		</div>		
		<reserve></reserve>
	</div>		
</template>

<script>
  import SlideShow from './slideshow'
  import Evaluate from './evaluate'
  import Hint from './hint'
  import Message from './message'
  import Supplier from './supplier'
  import Comment from './comment'
  import Recommend from './recommend'
  import Reserve from './reserve'
  
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      SlideShow,
      Evaluate,
      Hint,
      Message,
      Supplier,
      Comment,
      Recommend,
      Reserve
    },
    data () {
      return {
        swiperInfo: [],
        recommend: []
      }
    },
    methods: {
      getDetailsData () {
        axios.get('/api/details.json')
            .then(this.hangdleGetDataSucc.bind(this))
            .catch(this.handleGetDataErr.bind(this))
      },
      hangdleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.recommend = data.recommend
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getDetailsData()
    }
  }
</script>

<style lang='stylus' scoped >
	.auto 
		height: 12.4rem
		overflow: auto
</style>