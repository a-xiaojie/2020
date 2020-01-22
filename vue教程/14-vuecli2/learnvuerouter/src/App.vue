<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userId">用户</router-link>
    <router-link :to="{path:'/profile', query: {userId}}">档案</router-link>
    <!--<button @click="linkToHome">首页</button>
    <button @click="linkToAbout">关于</button>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    linkToHome () {
      this.$router.push('/home')
    },
    linkToAbout () {
      this.$router.push('/about')
    },
    userClick () {
      this.$router.push('/user/' + this.userId)
    },
    profileClick () {
      this.$router.push({
        path: '/profile',
        query: {
          userId: this.userId
        }
      })
    }
  }
}
</script>

<style>

</style>
