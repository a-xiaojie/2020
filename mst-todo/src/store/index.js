import { types } from 'mobx-state-tree'
import { values } from 'mobx'
const Todo = types
  .model({
    name: types.optional(types.string, ''),
    done: types.optional(types.boolean, false),
    user: types.maybe(types.reference(types.late(() => User)))
  })
  .actions(self => ({
    setName (newName) {
      self.name = newName
    },
    setUser (user) {
        if (user === '') {
            self.user = undefined
        } else {
            self.user = user
        }
    },
    toggle () {
      self.done = !self.done
    }
  }))

const User = types.model({
  // name: ''
  id: types.identifier,
  name: types.optional(types.string, '')
})

const RootStore = types
  .model({
    users: types.map(User),
    todos: types.optional(types.map(Todo), {})
  })
  .views(self => ({
      get pendingCount () {
          return values(self.todos).filter(todo => !todo.done).length
      },
      get completedCount () {
          return values(self.todos).filter(todo => todo.done).length
      },
      getTodosWhereDoneIs (done) {
          return values(self.todos).filter(todo => todo.done === done)
      }
  }))
  .actions(self => ({
    addTodo (id, name) {
      self.todos.set(id, Todo.create({ name }))
    }
  }))

const store = RootStore.create({
  users: {
      "1": {
          id: '1',
          name: 'mweststrate'
      },
      "2": {
          id: '2',
          name: 'mattiamanzati'
      },
      "3": {
          id: '3',
          name: 'johndoe'
      }
  },
  todos: {
      "1": {
          name: 'Eat a cake',
          done: true
      }
  }
})

export default store