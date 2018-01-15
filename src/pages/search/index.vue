<template>
  <div>
    <index-header></index-header>
    <index-search></index-search>
    <index-ordinaryplace></index-ordinaryplace>
    <index-myselfplace></index-myselfplace>
    <index-hotcity></index-hotcity>
    <index-hotcitylist></index-hotcitylist>
    <index-citylist :list="cityInfo"></index-citylist>
    <index-rilist></index-rilist>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import IndexSearch from './search'
  import IndexOrdinaryplace from './ordinaryplace'
  import IndexMyselfplace from './myselfplace'
  import IndexHotcity from './hotcity'
  import IndexHotcitylist from './hotcitylist'
  import IndexCitylist from './citylist'
  import IndexRilist from './rilist'
  import axios from 'axios'
  export default {
    name: 'search',
    components: {
      IndexHeader,
      IndexSearch,
      IndexOrdinaryplace,
      IndexMyselfplace,
      IndexHotcity,
      IndexHotcitylist,
      IndexCitylist,
      IndexRilist
    },
    data () {
      return {
        cityInfo: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/search.json')
              .then(this.handleGetDataSucc.bind(this))
              .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.cityInfo = data.citylists
        console.log(this.cityInfo)
      },
      handleGetDataErr () {
        console.log('我失败了')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>
<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"

</style>
