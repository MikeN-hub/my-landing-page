import React from 'react'
import Todo from './Todo'
import styles from './Todo.module.scss'

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <div className={styles.todo_list}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
      ))}
    </div>
  )
}

export default TodoList
