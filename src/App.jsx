import React from 'react'
import Header from './component/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from './route/HomePage'
import NotFound from './route/NotFound'
import BasketPage from './route/BasketPage'
import Footer from './component/Footer'
import GrayComponent from './component/GrayComponent'

const App = () => {
  return (
    <div>
       <GrayComponent/>
       <HomePage/>
      <Routes>
      
      <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound/>}/>

        <Route path="/basket" element={<BasketPage/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App