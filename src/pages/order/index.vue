<template>
<div class="index">
  <div  class="bg">
    <ul>
      <order-header></order-header>
      <order-price></order-price> 
      <order-amount></order-amount> 
      <order-list></order-list>
    </ul>
  </div>
  <order-end></order-end>
</div>
</template>

<script>
  import OrderHeader from './header.vue'
  import OrderPrice from './price.vue'
  import OrderAmount from './amount.vue'
  import OrderList from './list.vue'
  import OrderEnd from './end.vue'
  import BScroll from 'better-scroll'
  export default {
    name: 'order',
    components: {
      OrderHeader,
      OrderPrice,
      OrderAmount,
      OrderList,
      OrderEnd
    },
    mounted () {
      this.scroll = new BScroll('.bg')
    }
  }
</script>

<style lang="stylus" scoped>
.bg
  height: 17.2rem
  width: 11rem
  overflow: auto
  background: #ccc
</style>