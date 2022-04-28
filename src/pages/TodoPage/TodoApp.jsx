import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { nanoid } from 'nanoid'
import TodoList from './TodoList/TodoList'
import AddNewTask from './AddNewTask/AddNewTask'
import './TodoApp.scss'
import Task from './Task/Task'

const TodoApp = () => {
  const data = [
    { id: nanoid(), text: 'learn react', isComplite: false },
    { id: nanoid(), text: 'go to swimming pool', isComplite: true },
  ]

  const [tasks, setTasks] = useState(data)

  const addTask = (text) => {
    let newTask = {id: nanoid(), text, isComplite: false}
    setTasks(prev => ([newTask, ...prev]))
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
      <Task />
    </div>
  )
}

export default TodoApp
