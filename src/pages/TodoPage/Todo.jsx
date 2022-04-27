import React from 'react'
import styles from './Todo.module.scss'
import { FaEdit } from 'react-icons/fa'
import { FaRegTrashAlt } from 'react-icons/fa'

const Todo = ({ todo, removeTodo, toggleTodo }) => {
  const toggle = () => {
    console.log('yes')
  }
  return (
    <div className={styles.todo}>
      <input type='checkbox' onClick={() => toggle}/>
      <div className={styles.text}>{todo.text}</div>
      <div className={styles.edit}>
        <FaEdit color='green' size={20} />
      </div>
      <div className={styles.remove}>
        <FaRegTrashAlt size={20} color='orangered' onClick={() => removeTodo(todo.id)} />
      </div>
    </div>
  )
}

export default Todo
