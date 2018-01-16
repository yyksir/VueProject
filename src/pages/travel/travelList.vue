<template>
  <div>
    <ul>
      <li v-for="item in travelList" class="travel-item">
        <img :src="item.srcVal" class="photo">
        <div class="con">
          <p class="title">{{item.title}}</p>
          <div class="desc">
            <span class="startplace">{{item.startPlace}}</span>
            <span class="extra">{{item.extra}}</span>
          </div>
          <span class="salesNum">{{item.salesNum}}</span>
        </div>
        <span class="price">{{item.price}}<i class="price-last">起</i></span>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'travel-list',
    data () {
      return {
        travelList: []
      }
    },
    methods: {
      getTravelListInfo () {
        axios.get('api/travelList.json')
          .then(this.handleGetTravelListSucc.bind(this))
          .catch(this.handleGetTravelListErr.bind(this))
      },
      handleGetTravelListSucc (res) {
        this.travelList = res.data.data.travelList
      },
      handleGetTravelListErr () {
      }
    },
    created () {
      this.getTravelListInfo()
    }
  }
</script>
<style  lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'
  .travel-item
    height: 1.8rem
    width: 100%
    display: flex
  .photo
    width: 1.6rem
    height: 1.6rem
    margin .1rem

  .con
    margin-top: .1rem
    flex: 1
    height: 1.6rem
    position: relative
    border-bottom: 1px solid $textLightColor
  .desc
    margin-top: .2rem
    height: .3rem
  .startplace
    color: $bgColor
  .salesNum
    position: absolute
    left: 0px
    bottom: 0.1rem
  .travel-item
    position: relative
  .price
    position: absolute
    right: .5rem
    bottom: 0.4rem
    font-size: 22px
    font-weight: 700
    color: orangered
  .price-last
    font-size:14px
    color: $textLightColor
</style>
