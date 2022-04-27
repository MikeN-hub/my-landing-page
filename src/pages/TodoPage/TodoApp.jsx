import React, { useState } from 'react'
import TodoList from './TodoList'
import styles from './Todo.module.scss'

const TodoApp = () => {
  const data = [
    { id: 1, text: 'learn react', isComplite: false },
    { id: 2, text: 'go to swimming pool', isComplite: 'false' },
  ]

  const [todos, setTodos] = useState(data)

  const removeTodo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    let current = todos.find(todo => todo.id === id)
    current.isComplite = !current.isComplite
    setTodos(...todos, current)
  }

  console.log(todos)

  return (
    <div className={styles.todo_app}>
      <h2>Todo List</h2>
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  )
}

export default TodoApp
