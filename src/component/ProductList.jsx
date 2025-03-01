 import React from 'react'
import ProductItem from './ProductItem';
 
 const ProductList = ({product}) => {
  console.log(product);
  
   return (
     <div>
       {product.map((item)=>{
        return <ProductItem key={item.id} productData={item}/>
       })}
    </div>
   )
 }
 
 export default ProductList