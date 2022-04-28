import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
// import './AddNewTask.scss'
import '../Task/Task'
import Task from '../Task/Task'

const AddNewTask = () => {

  return (
    <Task buttonText={'add new Task'}></Task>
  )
}

export default AddNewTask
