import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import todo_img from '../../assets/images/todo_img.jpeg'
import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className='title'>
        <h1>You are welcome!</h1>
        <h2>Here you can explore some intresting projects</h2>
      </div>
      <main>
        <div className='progects_pic'>
          <div className='todo_pic'>
            <Link to='todo-app'>
              <img src={todo_img} alt='todo-pic' width={200} />
            </Link>
          </div>
        </div>
      </main>
      <Outlet />
    </div>
  )
}

export default HomePage
