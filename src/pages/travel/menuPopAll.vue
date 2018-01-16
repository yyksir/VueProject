<template>
  <div class="menu-pop-con" v-if="show">
    <div class="menu-pop-left">
      <div class="wrapper">
        <ul>
          <li v-for="(item,index) in types" class="scroller" v-bind:class="{ grayBg : item.showGray }" @click ="handleItemClick(index)">
            <img :src="item.srcVal" class="m-icon"/> <span class="m-name">{{item.typeName}}</span> <span class="m-num">{{item.num}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="menu-pop-right">
      <div>
        <ul>
          <li v-for="detail in details" class="scroller-right">
            <span class="d-name">{{detail.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  export default{
    name: 'menu-pop-all',
    props: ['show'],
    components: {
      BScroll
    },
    data () {
      return {
        types: [],
        details: []
      }
    },
    methods: {
      getMenuData () {
        axios.get('/api/travelmenu.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleItemClick (index) {
        this.types.forEach((item, i) => {
          if (i === index) {
            item.showGray = true
            this.details = item.childData
          } else {
            item.showGray = false
          }
        })
      },
      handleGetDataSucc (res) {
        this.types = res.data.data.menulist
        this.scroll = new BScroll('.menu-pop-left')
      },
      handleGetDataErr (res) {
      }
    },
    mounted () {
    },
    created () {
      this.getMenuData()
    }
  }
</script>
<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'

  .scroller
    height: 1rem
    line-height: 1rem
    border-bottom: 1px solid #ccc
    font-size: 14px
  .scroller-right
    height: 1rem
    line-height: 1rem
    border-bottom: 1px solid transparent
    font-size: 14px
  .m-icon
    width: .3rem
    height: .3rem
    margin-left: .3rem
    vertical-align: middle
  .m-name
    height: .8rem
    line-height: .8rem
  .m-num
    float: right
    margin-right: .2rem
    color: $textLightColor
  .menu-pop-con
    width: 100%
    height: 20rem
    background: rgba(0,0,0,0.45)
    position: absolute
    left: 0
    z-index: 2
    top: .89rem
  .menu-pop-left
    width: 50%
    overflow: hidden
    float left
  .not-show
    display: none
  .menu-pop-left
    height: 5rem
    background: #FFF
  .menu-pop-right
    height: 5rem
    width: 50%
    background: $lightGrayBgColor
    float: right
  .d-name
    margin-left: .5rem
  .grayBg
    background: $lightGrayBgColor
</style>
