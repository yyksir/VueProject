<template>
  <div>
    <div class="location-containner">
      <h6 class="area-title">您的位置</h6>
      <div class="location">
        <div class="location-city citySelect"  ref="selectCity">{{city}}</div>
      </div>
    </div>
    <div class="hotCity-containner">
      <h6 class="area-title">热门城市</h6>
      <div class="hotCity location">
        <div class="hotCity-city location-city" v-for="item of hotCityInfo" @click="handleClick">{{item.city}}</div>
      </div>
    </div>
    <div class="DomesticCityList-container">
      <div v-for="city of domesticCityList">
        <h6 class="area-title">{{city[0]}}</h6>
        <div class="Inland-cityList" v-for="item of city[1]">{{item.cityarea}}</div>
      </div>
    </div>
    <div class="selector">
      <h5 class="selectorItem" v-for="index of domesticCityList">{{index[0]}}</h5>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'cityList',
    props: {
      hotCityInfo: Array,
      domesticCityList: Array,
      city: String
    },
    data () {
      return {
        city: localStorage.city ? localStorage.city : '北京'
      }
    },
    methods: {
      handleClick (e) {
        localStorage.city = e.target.innerHTML
        this.$bus.$emit('change', e.target.innerHTML)
        this.$router.go(-1)
      }
    },
    activated () {
      this.city = localStorage.city ? localStorage.city : '北京'
    }
  }
</script>
<style lang="stylus" scoped>
  .area-title
    background: #f5f5f5
    color: #616161
    font-size: .26rem
    line-height: .54rem
    padding-left: .3rem
  .location
    background: #fff
    overflow: hidden
    padding: .04rem .5rem .26rem .2rem
    .location-city
      box-sizing: border-box
      border: .02rem solid #c9cccd
      border-radius: .06rem
      color: #212121
      line-height: .56rem
      margin-top: .2rem
      overflow: hidden
      text-overflow: ellipsis
      text-align: center
      white-space: nowrap
      width: 30%
    .citySelect
      border-color: #00afc7
      color: #00afc7
  .hotCity
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
  .Inland-cityList
    border-top: 1px solid #f5f5f5
    color: #21212
    font-size: .28rem
    line-height: .76rem
    overflow: hidden
    padding-left: .2rem
    text-overflow: ellipsis
    white-space: nowrap
    width: 100%
  .selector
    position: fixed
    right: 0
    top: 22%
    .selectorItem
      color: #00afc7
      font-size: .24rem
      line-height: .33rem
      padding-right: 0.1rem
      text-align: center

</style>
