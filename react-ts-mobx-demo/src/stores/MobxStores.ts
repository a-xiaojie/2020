import { observable, action, computed } from 'mobx'
import moment from 'moment'

class AppStore {
  @observable time: string | number = ''
  @observable todos: any [] = []

  @computed get desc () {
    return `${this.time} 还有 ${this.todos.length} 条任务待完成`
  }

  @action addTodo (todo: any): void {
    this.todos.push(todo)
  }

  @action deleteTodo (): void {
    this.todos.pop()
  }

  @action resetTodo (): void {
    this.todos = []
  }

  @action getNow () {
    this.time = moment().format('YYYY-MM-DD HH:mm:ss')
  }
}

export default AppStore
