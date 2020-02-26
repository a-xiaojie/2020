<template>
  <div class="text" :style="styleOptions">
    <input type="text" v-model="text">
  </div>
</template>

<script>
  export default {
    name: 'XjText',
    props: {
      styleOptions: {
        type: Object,
        default () {
          return {
            color: '#fff',
            fontSize: '28px',
            lineHeight: '34px',
          }
        }
      },
      text: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>

</style>
