 import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './route/Home'
import PostPage from './route/PostPage'
import ProductPage from './route/ProductPage'
 
 const App = () => {

   return (
    <>
    <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}>
  <Route path='/post' element={<PostPage/>}/>
  <Route path='/product' element={<ProductPage/>}/>
  </Route>
  
 </Routes>
    
    </BrowserRouter>
    </>
   )
 }
 
 export default App