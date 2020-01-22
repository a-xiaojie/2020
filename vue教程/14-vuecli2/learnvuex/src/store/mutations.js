import {INCREMENT} from './mutations.types'

export default {
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
}
