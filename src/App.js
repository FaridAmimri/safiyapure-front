/** @format */

import './global.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Password from './pages/Password'

import { useSelector } from 'react-redux'

function App() {
  const user = useSelector((state) => state.user.currentUser)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:category' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register />}
        />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/password' element={<Password />} />
      </Routes>
    </Router>
  )
}

export default App
