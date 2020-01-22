export default {
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
}
