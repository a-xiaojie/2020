<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <cpn></cpn>
  </div>
</template>

<script>
  import Cpn from './Cpn'
  export default {
    name: 'App',
    data () {
      return {
        message: 'Hello Vue'
      }
    },
    methods: {
      btnClick () {

      }
    },
    components: {
      cpn: Cpn
    }
  }
</script>

<style scoped>
.title {
  color: green;
}
</style>
