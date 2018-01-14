<template>
  <div>
    <div class="cityclassify">
      A
    </div>
    <div class="citylist" >
    AAAA
    </div>
    <div class="citylist" >
    AAAA
    </div>
    <div class="citylist" >
    AAAA
    </div>
    <div class="citylist" >
    AAAA
    </div>
    <div class="citylist" >
    AAAA
    </div>
    <div class="citylist" >
    AAAA
    </div>
    <div class="cityclassify">
      B
    </div>
    <div class="citylist" >
    BBBB
    </div>
    <div class="citylist" >
    BBBB
    </div>
    <div class="citylist" >
    BBBB
    </div>
    <div class="citylist" >
    BBBB
    </div>
    <div class="citylist" >
    BBBB
    </div>
    <div class="citylist" >
    BBBB
    </div>
    <div class="citylist" >
    BBBB
    </div>
    <div class="citylist" >
    BBBB
    </div>
    <div class="cityclassify">
      C
    </div>
    <div class="citylist" >
    CCCC
    </div>
    <div class="citylist" >
    CCCC
    </div>
    <div class="citylist" >
    CCCC
    </div>
    <div class="citylist" >
    CCCC
    </div>
    <div class="citylist" >
    CCCC
    </div>
    <div class="citylist" >
    CCCC
    </div>
    <div class="citylist" >
    CCCC
    </div>
    <div class="citylist" >
    CCCC
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'index-citylist',
    props: {
      list: Object,
      hotcity: Array
    },
    watch: {
      list () {
        console.log(this.list)
      }
    },
    created () {
      this.getSearchInfo()
    },
    methods: {
      getSearchInfo () {
        axios.get('/api/search.json')
              .then(this.handleGetDataSucc.bind(this))
              .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        console.log(res)
      },
      handleGetDataErr () {
        console.log('哈哈')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .citylist
    display: flex
    height: .74rem
    padding-left: .2rem
    border-bottom: .02rem solid #e7e7e7
    line-height: .74rem
    background: #fff
    color: #636163
  .cityclassify
    display: flex
    height: .76rem
    padding-left: 0.2rem
    line-height: .66rem
    background: #f7f7f7
    color: #636163
</style>
