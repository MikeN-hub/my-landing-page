import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ShopPage from './pages/ShopPage/ShopPage'
import TodoList from './pages/TodoList/TodoList'
import NotfoundPage from './pages/NotfoundPage/NotfoundPage'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='about' element={<AboutPage />}></Route>
          <Route path='shop' element={<ShopPage />}></Route>
          <Route path='*' element={<NotfoundPage />}></Route>
          <Route path='todolist' element={<TodoList />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
