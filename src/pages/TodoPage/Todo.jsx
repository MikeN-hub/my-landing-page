import React from 'react'
import styles from './Todo.module.scss'
import {FaEdit} from 'react-icons/fa'

const Todo = ({ todo }) => {
  return (
    <div className={styles.todo}>
      <input type="checkbox" />
      <div className={styles.text}>{todo.text}</div>
      <div className={styles.edit}><FaEdit color='green' size={20}/></div>
      <div className={styles.remove}>&times;</div>
    </div>
  )
}

export default Todo
