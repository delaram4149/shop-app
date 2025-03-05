 import React from 'react'

import ProductPage from '../component/ProductPage'
import { Link } from 'react-router-dom'
 
 
 const HomePage = () => {
    return (
     <div>
      <Link to={'/test'}> go to the test page</Link>
       <ProductPage/>
     </div>
   )
 }
 
 export default HomePage