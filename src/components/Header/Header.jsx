import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='logo'>
        <img src={logo} alt='logo' width={50} />
      </div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='shop'>Shop</NavLink>
        <NavLink to='about'>About</NavLink>
      </nav>
      <div className='login'>
        <p>login</p>
        <p>password</p>
      </div>
    </header>
  )
}

export default Header
