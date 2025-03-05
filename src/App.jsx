 import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './route/HomePage'
import NotFound from './route/NotFound'
import BasketPage from './route/BasketPage'
import Header from './component/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Test from './route/Test'
 
 const App = () => {
   const queryClient= new QueryClient({
    defaultOptions : {
      queries : {
        staleTime : 10000
      }
    }
   })
   return (
    <>
    <QueryClientProvider client={queryClient}>
    <Header/>
  <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/test' element={<Test/>}/>
<Route path='*' element={<NotFound/>}/>
<Route path='/basket' element={<BasketPage/>}/>

  </Routes>
  </QueryClientProvider>
    </>
   )
 }
 
 export default App