import React from 'react'
import useBasket from '../store/Basket'
import BasketProductItem from '../component/BasketProductItem'

const BasketPage = () => {
const{items,invoice}=useBasket()

  return (
    <div>
 <h2> total basket price : {invoice.totalPrice}</h2>
 {items.map((item)=>{
  return <BasketProductItem key={item.id} productData={item}/>
 })}
    
    </div>
  )
}

export default BasketPage