import React from 'react'
import Todo from './Todo'
import styles from './Todo.module.scss'

const TodoList = ({ todos }) => {
  return (
    <div className={styles.todo_list}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}/>
      ))}
    </div>
  )
}

export default TodoList
