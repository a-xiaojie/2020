<template>
  <button class="xj-button" :style="styleOptions">{{text}}</button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      styleOptions: {
        type: Object,
        default () {
          return {
            width: '600px',
            height: '80px',
            color: '#fff',
            backgroundColor: '#FE013F',
            borderRadius: '0'
          }
        }
      },
      text: {
        type: String,
        default: '确定'
      }
    }
  }
</script>

<style scoped lang="less">
  .xj-button {
    display: block;
    margin: 0 auto;
    font-size: 30px;
  }
</style>
