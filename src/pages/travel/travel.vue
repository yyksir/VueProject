<template>
  <div>
    <travel-header></travel-header>
    <travel-menu></travel-menu>
    <travel-list></travel-list>
  </div>
</template>

<script>
  import TravelHeader from './header'
  import TravelMenu from './menu'
  import TravelList from './travelList'
  export default{
    name: 'travel',
    components: {
      TravelHeader,
      TravelMenu,
      TravelList
    }
  }
</script>

<style></style>
