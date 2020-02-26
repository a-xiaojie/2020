<template>
  <div class="xj-banner">
    <img :src="imgUrl" alt="">
  </div>
</template>

<script>
  export default {
    name: 'XjBanner',
    props: {
      imgUrl: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="less">
  .xj-banner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 750px;
    z-index: -1;
  }
</style>
