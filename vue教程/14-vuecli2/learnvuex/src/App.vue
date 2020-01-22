<template>
  <div id="app">
    <h2>--------App内容： modules中的内容--------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="aUpdateName">异步修改名字</button>


    <h2>--------App内容--------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>--------App内容：getters相关信息--------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stulength}}</h2>
    <h2>{{$store.getters.stuById(10)}}</h2>


    <h2>--------App内容：info相关信息--------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo($store.state)">修改信息</button>

    <h2>--------Hello Vuex内容--------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'
  import {
    INCREMENT
  } from './store/mutations.types'

  export default {
    name: 'App',
    data () {
      return {
        message: '我是App组件'
      }
    },
    components: {
      HelloVuex
    },
    methods: {
      add () {
        this.$store.commit(INCREMENT)
      },
      sub () {
        this.$store.commit('decrement')
      },
      addCount (count) {
        // payload: 负载
        // 1. 普通的提交封装
        // this.$store.commit('incrementCount', count)

        // 2. 特殊的提交封装
        this.$store.commit({
          type: 'incrementCount',
          count
        })

      },
      addStudent () {
        const stu = {id: 14, name: '小黄', age: 21}
        this.$store.commit('addStudent', stu)
      },
      updateInfo () {
        // this.$store.commit('updateInfo')
        // this.$store.dispatch('aUpdateInfo', {
        //   message: '我是携带的信息',
        //   success: () => {
        //     console.log('里面已经完成了')
        //   }
        // })

        this.$store
          .dispatch('aUpdateInfo', '我是携带的信息')
          .then(res => {
            console.log('里面完成了提交')
            console.log(res)
          })
      },
      updateName () {
        this.$store.commit('updateName', '丽莎')
      },
      aUpdateName () {
        this.$store.dispatch('aUpdateName')
      }
    }
  }
</script>

<style>
</style>
