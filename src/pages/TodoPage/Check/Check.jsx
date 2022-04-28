import React from 'react'
import { FaCheck } from 'react-icons/fa'

import './Check.scss'

const Check = ({ isComplite, toggleTask, id }) => {
  return (
    <div className='check' onClick={() => toggleTask(id)}>
      {isComplite && <FaCheck size={15} color='green' />}
    </div>
  )
}

export default Check
