import React from 'react'
import {
  inject, // 注入
  observer,
} from 'mobx-react'
import './style.css'

@inject('mobxStore')
@observer
export default class Home extends React.Component<any , any> {
  constructor (props: any) {
    super(props)
    this.state = {}
  }

  componentWillMount(): void {
    this.getDow()
  }

  render () {
    const { mobxStore } = this.props
    return (
      <div className="home">
        <h1>在React中使用mobx</h1>
        <div>{mobxStore.desc}</div>
        <button onClick={() => this.handleTodos('add')}>添加一条任务</button>
        <button onClick={() => this.handleTodos('delete')}>删除一条任务</button>
        <button onClick={() => this.handleTodos('reset')}>任务重置</button>

        {
          mobxStore.todos.map((item: any, index: number) => {
            return (
              <div key={index}>{item}</div>
            )
          })
        }
      </div>
    )
  }

  private handleTodos (type: string): void {
    const { mobxStore } = this.props
    switch (type) {
      case 'add':
        mobxStore.addTodo('一条新任务')
        break
      case 'delete':
        mobxStore.deleteTodo()
        break
      case 'reset':
        mobxStore.resetTodo()
        break
      default:
        break
    }
  }

  private getDow () {
    this.props.mobxStore.getNow()
    setInterval(() => {
      this.props.mobxStore.getNow()
    }, 1000)
  }
}
