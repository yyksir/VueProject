<template>
  <div class="citylist" >
    城市
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'index-citylist',
    data () {
      return {
        list: []
      }
    },
    methods: {
      getSearchInfo () {
        axios.get('/api/search.json?id=' + this.$route.params.id)
              .then(this.handleGetDataSucc.bind(this))
              .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        this.list = res.data
      },
      handleGetDataErr () {

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
</style>
