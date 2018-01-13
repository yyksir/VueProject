<template>
  <div>
    <index-header></index-header>
    <index-search></index-search>
    <index-ordinaryplace></index-ordinaryplace>
    <index-myselfplace></index-myselfplace>
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
    name: 'index',
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
    watch: {
      '$route' () {
        this.getSearchInfo()
      }
    },
    methods: {
      getSearchInfo () {
        axios.get('/api/search.json')
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
</style>
