import React from 'react'
import { Link } from 'react-router-dom'
import Check from '../Check/Check'
import { FaEdit } from 'react-icons/fa'
import { FaRegTrashAlt } from 'react-icons/fa'
import './TodoTask.scss'

const Todo = ({ task, removeTask, toggleTask, editTask }) => {
  return (
    <div className='todo-task'>
      <Check
        isComplite={task.isComplite}
        toggleTask={toggleTask}
        id={task.id}
      />
      <div className={`text ${task.isComplite ? 'complited' : ''}`}>
        {task.text}
      </div>
      <div className='edit'>
        <Link to='modal'>
          <FaEdit color='#EFD125' size={20} onClick={() => editTask(task.id)} />
        </Link>
      </div>
      <div className='remove'>
        <FaRegTrashAlt
          size={20}
          color='orangered'
          onClick={() => removeTask(task.id)}
        />
      </div>
    </div>
  )
}

export default Todo
