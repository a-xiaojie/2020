// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

/**
 * 解决部分机型及浏览器白屏：
 1、可能是不支持promise特性，安装babel-polyfill即可。这个第三方包会判断浏览器是否有promise，如果没有，会自动往里添加promise这些es6的新特性。

 第一步：npm install babel-polyfill --save
 第二步：到入口文件main.js里引入babel-polyfill
 import 'babel-polyfill'

 2、webpack-dev-server的问题，webpack打包上线放到真正的开发环境或线上环境的服务器，就不会出现白屏了。
 */
