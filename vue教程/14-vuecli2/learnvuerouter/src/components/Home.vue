<template>
  <div class="hello">
    <h2>我是首页</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      message: '你好啊',
      path: '/home/news'
    }
  },
  created() {
    console.log('created')
  },
  destroyed() {
    console.log('destroyed')
  },
  // 这两个函数只有该组件被保持了状态使用了keep-alive时，才是有效的
  activated() {
    this.$router.push(this.path)
  },
  deactivated() {
    console.log('deactivated')
  },
  beforeRouteLeave (to, from ,next) {
    this.path = this.$route.path
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
