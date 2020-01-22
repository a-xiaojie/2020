import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './store/mutations.types'

// 1.安装插件
Vue.use(Vuex)

const moduleA = {
  state: {
    name: '小菲'
  },
  mutations: {
    updateName (state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName (context) {
      console.log(context)
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000)
    }
  },
  getters: {
    fullName (state) {
      return state.name + '1111'
    },
    fullName2 (state, getters) {
      return getters.fullName + '2222'
    },
    fullName3 (state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  }
}

// 2. 创建对象
const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    // 方法
    [INCREMENT] (state) {
      state.counter ++
    },
    decrement (state) {
      state.counter --
    },
    incrementCount (state, payload) {
      state.counter += payload.count
    },
    addStudent (state, stu) {
      state.students.push(stu)
    },
    updateInfo (state) {
      state.info.name = 'xiaohong'

      // 错误代码：不能在这进行异步操作
      // setTimeout(() => {
      //   state.info.name = 'xiaohong'
      // }, 100)

      // state.info['address'] = '杭州'
      // this.$set(state.info, 'address', '杭州')

      // 该方式做不到响应式
      // delete state.info.age
      // this.$delete(state.info, 'age')
    }
  },
  actions: {
    // aUpdateInfo (context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message)
    //     payload.success()
    //   }, 1000)
    // }
    aUpdateInfo (context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)
          resolve(1111)
        }, 1000)
      })
    }
  },
  getters: {
    powerCounter (state) {
      return state.counter * state.counter
    },
    // 获取所有年龄大于20岁学生列表的getters
    more20stu (state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stulength (state, getters) {
      return getters.more20stu.length
    },
    // 根据ID获取用户的信息
    stuById (state) {
      return id => {
        return state.students.filter(s => s.id === id)
      }
    }
  },
  modules: {
    a: moduleA
  }
})

// 3.导出store
export default store
