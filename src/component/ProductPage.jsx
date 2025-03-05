 import React from 'react'
import { useQuery } from '@tanstack/react-query'
import getProducts from '../service/api/products'
import ProductItem from './ProductItem'
 
 const ProductPage = () => {
     const {isPending , data , isStale}=useQuery({queryKey :["/products"], queryFn: getProducts , staleTime:2000})
     console.log("🚀 ~ ProductPage ~ isStale:", isStale)
    
   return (
     <div>
      <h1 className='font-bold text-red-950'>{!isStale ? "data is fresh" : "data is stale"}</h1>
    {isPending ? 'loading ...' :
     data.data.map((item)=>{
      return <ProductItem key={item.id} productData={item}/>
     })
     
    }
     </div>
   )
    
 }
 
 export default ProductPage