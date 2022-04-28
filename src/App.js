import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ShopPage from './pages/ShopPage/ShopPage'
import TodoApp from './pages/TodoPage/TodoApp'
import NotfoundPage from './pages/NotfoundPage/NotfoundPage'
import Modal from './pages/TodoPage/Modal/Modal'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='about' element={<AboutPage />}></Route>
          <Route path='shop' element={<ShopPage />}></Route>
          <Route path='todo-app' element={<TodoApp />}>
            <Route path='modal' element={<Modal />}></Route>
          </Route>
          <Route path='*' element={<NotfoundPage />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
