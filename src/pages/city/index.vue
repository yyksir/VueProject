<template>
  <div class="body">
	  <city-header></city-header>
	  <city-search></city-search>
	  <city-List :hotCityInfo="hotCityInfo"
               :domesticCityList="domesticCityList"
               :city="city"
                ></city-List>
  </div>
</template>

<script>
  import CityHeader from './header'
  import CitySearch from './search'
  import CityList from './cityList'
  import axios from 'axios'
  export default {
    name: 'cityIndex',
    components: {
      CityHeader,
      CitySearch,
      CityList
    },
    data () {
      return {
        hotCityInfo: [],
        domesticCityList: [],
        city: ''
      }
    },
    methods: {
      getCityListData () {
        const city = localStorage.city ? localStorage.city : ''
        axios.get('/api/cityList.json?city=' + city)
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.hotCityInfo = data.hotcity
        this.domesticCityList = data.china
        // this.$bus.$emit('change', data.city)
        localStorage.city = data.city
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getCityListData()
    }
  }
</script>

<style lang="stylus" scopde>
	.body
		overflow: hidden
</style>
