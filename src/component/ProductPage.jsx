 import React from 'react'
import useFetchData from '../hooks/fetchData'
import ProductList from './ProductList'
 
 const ProductPage = () => {
 const{isPending,data}=useFetchData('https://fakestoreapi.com/products')
   return (
     <div>
      {isPending ? 'loading...':
      <ProductList product={data}/>
      }
     </div>
   )
 }
 
 export default ProductPage