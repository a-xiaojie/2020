<template>
  <common-base
      :id="id"
      :text="text"
      :css="css"
      :option="option"
  >
    <input :placeholder="option.placeholder" type="text" class="btn-con" :style="style" />
  </common-base>
</template>

<script>
  import { handleStyle } from '@/utils'
  import CommonBase from './CommonBase'

  export default {
    name: 'BaseInput',
    components: {
      CommonBase
    },
    props: {
      id: {
        type: String
      },
      text: {
        type: String,
        default: ''
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
      showText () {
        return this.text.replace(/\n|\r\n/g, '<br/>')
      },
      style () {
        return handleStyle(this.css)
      },
    },
  }
</script>

<style lang="less" scoped>
</style>
