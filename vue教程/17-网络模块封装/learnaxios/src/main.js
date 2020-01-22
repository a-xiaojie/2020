import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 1.基本使用
// 没有参数
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res)
// })

// 2.axios发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://restapi.xuanwonainiu.com/agent/tlj/prod/page',
//   method: 'post',
//   data: {
//     page: 0,
//     size: 100
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

// 3. 全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.timeout = 5000
//
// axios({
//   url: '/home/multidata',
// }).then(res => {
//   console.log(res)
// })

// 4.创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
//
// instance1({
//   url: '/home/multidata',
// }).then(res => {
//   console.log(res)
// })
//
// const instance2 = axios.create({
//   baseURL: 'http://restapi.xuanwonainiu.com',
//   timeout: 10000
// })
//
// instance2({
//   url: '/agent/tlj/prod/page',
//   method: 'post',
//   data: {
//     page: 0,
//     size: 100
//   }
// }).then(res => {
//   console.log(res)
// })

// 5.axios封装
import { request } from './network/request'
request({
  url: '/agent/tlj/prod/page/1',
  method: 'post',
  data: {
    page: 0,
    size: 100
  }
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
