<template>
  <common-base
      :id="id"
      :text="text"
      :css="css"
      :option="option"
  >
    <button :style="style" class="inline-btn">{{text}}</button>
  </common-base>
</template>

<script>
  import { handleStyle } from '@/utils'
  import CommonBase from './CommonBase'

  export default {
    name: 'BaseButton',
    components: {
      CommonBase
    },
    props: {
      id: {
        type: String
      },
      text: {
        type: String,
        default: '按钮'
      },
      css: {
        type: Object,
        default: () => {}
      },
      option: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      style () {
        return handleStyle(this.css)
      },
    },
  }
</script>

<style lang="less" scoped>
  @import url('~@/assets/style/var');
  .hover-template {
    position: absolute;
    user-select: none;
    outline: 1px solid @themeColor;
  }
  .base-complate {
    position: absolute;
    user-select: none;
  }
</style>
