<template>
  <div>
    <index-header></index-header>
    <index-search></index-search>
    <index-ordinaryplace></index-ordinaryplace>
    <index-myselfplace class="list" 
                        :list="list" 
                        :hotcity="hotcity">
    </index-myselfplace>
    <index-hotcity></index-hotcity>
    <index-hotcitylist></index-hotcitylist>
    <index-cityclassify></index-cityclassify>
    <index-citylist></index-citylist>
    <index-rilist></index-rilist>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import axios from 'axios'
  import IndexSearch from './search'
  import IndexOrdinaryplace from './ordinaryplace'
  import IndexMyselfplace from './myselfplace'
  import IndexHotcity from './hotcity'
  import IndexHotcitylist from './hotcitylist'
  import IndexCityclassify from './cityclassify'
  import IndexCitylist from './citylist'
  import IndexRilist from './rilist'
  export default {
    name: 'search',
    data () {
      return {
        list: [],
        hotcity: []
      }
    },
    components: {
      IndexHeader,
      IndexSearch,
      IndexOrdinaryplace,
      IndexMyselfplace,
      IndexHotcity,
      IndexHotcitylist,
      IndexCityclassify,
      IndexCitylist,
      IndexRilist
    },
    created () {
      this.getSearchInfo()
    },
    methods: {
      getSearchInfo () {
        axios.get('/api/search.json')
            .then(this.handleGetSearchSucc.bind(this))
            .catch(this.handleGetSearchErr.bind(this))
      },
      handleGetSearchSucc (res) {
       res && (res = res.data)
       if (res && res.data) {
         res.data.list && (this.list = res.data.list)
         res.data.hotcity && (this.hotcity = res.data.hotcity)
       } else {
         this.handleGetSearchErr()
       }
      },
      handleGetSearchErr () {
        console.log('请求失败')
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
</style>
