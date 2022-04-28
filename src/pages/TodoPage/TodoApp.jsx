import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import TodoList from './TodoList/TodoList'
import AddNewTask from './AddNewTask/AddNewTask'
import './TodoApp.scss'

const TodoApp = () => {
  const data = [
    { id: 1, text: 'learn react', isComplite: false },
    { id: 2, text: 'go to swimming pool', isComplite: true },
  ]

  const [tasks, setTasks] = useState(data)

  const addTask = (text) => {
    setTasks([...tasks, {id: 3, text, isComplite: false}])
  }

  const removeTask = (id) => {
    setTasks([...tasks].filter((todo) => todo.id !== id))
  }

  const toggleTask = (id) => {
    // let copy = [...todos]
    // let current = copy.find(todo => todo.id === id)
    // current.isComplite = !current.isComplite
    // setTasks(copy)
    setTasks(
      [...tasks].map((todo) => {
        return todo.id === id
          ? { ...todo, isComplite: !todo.isComplite }
          : { ...todo }
      })
    )
  }

  const editTask = (id) => {
    console.log('edited')
  }

  return (
    <div className='todo-app'>
      <h2>Todo List</h2>
      <AddNewTask addTask={addTask}/>
      <TodoList tasks={tasks} removeTask={removeTask} toggleTask={toggleTask} editTask={editTask}/>
      <Outlet />
    </div>
  )
}

export default TodoApp
