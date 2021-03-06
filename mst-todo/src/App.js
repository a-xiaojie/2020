import React from 'react';
import './App.css';
import { getSnapshot } from 'mobx-state-tree'
import { observer } from 'mobx-react'
import { values } from 'mobx'

// store.addTodo(randomId, 'Eact a cake')
let id = 2

function randomId () {
  return id++
}

const UserPickerView = observer(props => (
  <select value={props.user ? props.user.id : ''} onChange={e => props.onChange(e.target.value)}>
    <option value=''>-none-</option>
    {
      values(props.store.users).map(user => (
        <option value={user.id} key={user.id}>{user.name}</option>
      ))
    }
  </select>
))

const TodoView = observer(props => (
  <div>
    <input type="checkbox" checked={props.todo.done} onChange={e => props.todo.toggle()}/>
    <input type="text" value={props.todo.name} onChange={e => props.todo.setName(e.target.value)}/>
    <UserPickerView
      user={props.todo.user}
      store={props.store}
      onChange={userId => props.todo.setUser(userId)}
    />
  </div>
))

const TodoCounterView = observer(props => (
  <div>
    {props.store.pendingCount} pending, {props.store.completedCount} completed
  </div>
))

const App = observer(props => {
  console.log(getSnapshot(props.store))
  return (
    <div className="App">
      <button onClick={e => props.store.addTodo(randomId(), 'New Task')}>Add Task</button>
      {
        values(props.store.todos).map(todo => (
          <TodoView todo={todo} key={todo} store={props.store}/>
        ))
      }
      <TodoCounterView store={props.store} />
    </div>
  )
})

export default App;
