<template>
  <div class="rilistbig">
    <div class="rilist">
        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    </div>
  </div>
  
</template>

<script>
  export default {
    name: 'index-rilistbig'
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .rilistbig
    position: fixed
    width: .26rem
    height: 7.18rem
    top: 2.04rem
    right: .01rem
    word-wrap: break-word
    text-align: center
    color: #00aec6
    .rilist
      display: flex
      flex-flow: column
      justify-content: space-around
</style>
