import { useQuery } from '@tanstack/react-query'
import React from 'react'
import getProducts from '../service/api/products'
import ProductItem from '../component/ProductItem'

const Test = () => {
    const{data, isPending, isStale}=useQuery({queryKey : ['/products'] , queryFn : getProducts })
  return (
    <div>
         <h1 className='font-bold text-red-950'>{!isStale ? "data is fresh" : "data is stale"}</h1>
{isPending ? 'loading ...' :
data.data.map((item)=>{
    return <li key={item.id}>{item.title} </li>
})
}

    </div>
  )
}

export default Test