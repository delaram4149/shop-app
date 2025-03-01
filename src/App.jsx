 import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './route/HomePage'
import NotFound from './route/NotFound'
import BasketPage from './route/BasketPage'
import Header from './component/Header'
 
 const App = () => {

   return (
    <>
    <Header/>
  <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='*' element={<NotFound/>}/>
<Route path='/basket' element={<BasketPage/>}/>

  </Routes>
    </>
   )
 }
 
 export default App