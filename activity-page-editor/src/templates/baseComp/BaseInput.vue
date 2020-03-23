<template>
  <div class="btn_con">
    <edit>
      <p :style="style" class="inline_btn" v-html="showText"></p>
    </edit>
  </div>
</template>

<script>
  import { handleStyle } from '@/utils'
  import Edit from '@/views/main/components/Edit'
  export default {
    name: 'BaseText',
    components: {
      Edit
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
      constyle () {
        return {
          top: this.style.top,
          left: this.style.left,
          width: this.style.width,
          height: this.style.height,
          zIndex: this.style.zIndex
        }
      }
    }
  }
</script>

<style scoped>

</style>
