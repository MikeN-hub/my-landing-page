import React, { useState } from 'react'
import './Task.scss'

const Task = ({ taskText, buttonText }) => {
  const [inputText, setInputText] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    addTask(inputText)
  }
  return (
    <form className='task' onSubmit={submitHandler}>
      <input
        type='text'
        defaultValue={taskText}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type='submit'>{buttonText}</button>
    </form>
  )
}

export default Task
