import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import './AddNewTask.scss'

const AddNewTask = ({ addTask }) => {
  const [inputText, setInputText] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    addTask(inputText)
  }

  return (
    <form className='add-new-task' onSubmit={submitHandler}>
      <input
        type='text'
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        autoFocus
      />
      <button type='submit'>
        <AiOutlinePlusCircle size={20} />
        <span>add new Task</span>
      </button>
    </form>
  )
}

export default AddNewTask
