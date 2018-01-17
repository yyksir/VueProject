<template>
	<div>
 		<index-header></index-header>
 		<base-info></base-info>
 		<comment-info></comment-info>
	</div>
</template>

<script>
  import IndexHeader from './header'
  import BaseInfo from './baseinfo'
  import CommentInfo from './commentinfo'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      BaseInfo,
      CommentInfo
    }
  }
</script>

<style lang="stylus" scoped>

</style>
