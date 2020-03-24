<template>
  <div class="core"
       :style="{background: core.background}"
  >
    <component
        v-for="(item, index) in templates"
        :key="index"
        :is="item.name"
        :id="item.activityId"
        :css="item.css"
        :option="item.option"
        :text="item.text"
    >
    </component>
  </div>
</template>

<script>
  import BaseButton from '@/templates/baseComp/BaseButton'
  import BaseText from '@/templates/baseComp/BaseText'
  import BaseInput from '@/templates/baseComp/BaseInput'
  import { mapState } from 'vuex'
  export default {
    name: 'Core',
    computed: {
      ...mapState(['core', 'templates'])
    },
    components: {
      BaseButton,
      BaseText,
      BaseInput,
    }
  }
</script>

<style lang="less" scoped>
  .core {
    position: relative;
  }
</style>
