import React from 'react'
import TodoList from './TodoList'
import styles from './Todo.module.scss'

const TodoApp = () => {
  const todos = [{id: 1, text: 'learn react', done: false}, {id: 2, text: 'go to swimming pool', done: 'false'}]

  return (
    <div className={styles.todo_app}>
      <h2>Todo List</h2>
      <TodoList todos={todos}/>
    </div>
  )
}

export default TodoApp
