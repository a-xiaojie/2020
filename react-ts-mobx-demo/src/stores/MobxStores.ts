// import { observable, action, computed } from 'mobx'
import { types } from 'mobx-state-tree'
import moment from 'moment'

const Todo = types
  .model({
    name: types.optional(types.string, ''),
    done: types.optional(types.boolean, false)
  })
  .actions(self => ({
    toggle () {
      self.done = !self.done
    }
  }))
const MobxStores = types
  .model({
    time: types.optional(types.string, ''),
    todos: types.optional(types.array(Todo), [])
  })
  .views(self => ({
    get desc () {
      return `${self.time} 还有 ${self.todos.length} 条任务待完成`
    }
  }))
  .actions(self => ({
    addTodo (todo: any): void {
      self.todos.push(todo)
    },
    deleteTodo () {
      self.todos.pop()
    },
    resetTodo () {
      self.todos.clear()
    },
    getNow () {
      self.time = moment().format('YYYY-MM-DD HH:mm:ss')
    }
  }))

export default MobxStores
