// 1. 使用commonjs的模块化规范
const { add, mul } = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化规范
import * as info from './js/info';

console.log(info.name)

// 3. 依赖css文件
require('./css/normal.css')

// 4. 依赖less文件
require('./css/special.less')
document.writeln('<h2>Hello webpack</h2>')

// 5. 使用Vue进行开发
import Vue from 'vue'
import App from './vue/App.vue'

new Vue({
  el: '#app',
  template: '<App />',
  components: {
    App
  }
})
