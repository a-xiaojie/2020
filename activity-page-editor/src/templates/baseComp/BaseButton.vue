<template>
  <div class="btn-con" @click.stop="toggleEdit" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <edit v-show="editStatus" :style="constyle" :id="id">
      <button :style="style" class="inline-btn">{{text}}</button>
    </edit>
    <div
        v-show="hoverStatus && !editStatus"
        :style="constyle"
        class="hover-template"
    >
      <button :style="style" class="inline-btn">{{text}}</button>
    </div>
    <button
        v-show="!editStatus && !hoverStatus"
        class="base-complate"
        :style="style"
    >{{text}}</button>
  </div>
</template>

<script>
  import { handleStyle } from '@/utils'
  import Edit from '@/views/main/components/Edit'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'BaseButton',
    components: {
      Edit
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
      ...mapState(['activeTemplate', 'hoverTemplate']),
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
      },
      editStatus () {
        return this.activeTemplate === this.id
      },
      hoverStatus () {
        return this.hoverTemplate === this.id
      }
    },
    methods: {
      ...mapMutations(['toggleTempStatus', 'setHoverTemplate']),
      toggleEdit () {
        this.toggleTempStatus(this.id)
      },
      mouseEnter () {
        this.setHoverTemplate(this.id)
      },
      mouseLeave () {
        this.setHoverTemplate('')
      }
    }
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
