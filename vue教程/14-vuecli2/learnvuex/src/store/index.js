import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutations.types'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA  from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex)

const state = {
  counter: 10,
  students: [
    {id: 10, name: '小红', age: 18},
    {id: 11, name: '小明', age: 24},
    {id: 12, name: '小刚', age: 30},
    {id: 13, name: '小华', age: 20},
  ],
  info: {
    name: '小花',
    age: 28,
  }
}
// 2. 创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

// 3.导出store
export default store
