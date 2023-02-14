import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import CategorieProducts from './pages/Categories/CategorieProducts'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='categories/:id' element={<CategorieProducts/>}/>
      </Route>
    </Routes>
  )
}

export default App