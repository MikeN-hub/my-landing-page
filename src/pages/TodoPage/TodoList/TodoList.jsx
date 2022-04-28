import React from 'react'
import TodoTask from '../TodoTask/TodoTask'
import './TodoList.scss'

const TodoList = ({ tasks, removeTask, toggleTask, editTask }) => {
  return (
    <div className='todo-list'>
      {tasks.map((task) => (
        <TodoTask key={task.id} task={task} removeTask={removeTask} toggleTask={toggleTask} editTask={editTask}/>
      ))}
    </div>
  )
}

export default TodoList
