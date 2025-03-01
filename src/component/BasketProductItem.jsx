 import React from 'react'
import useBasket from '../store/Basket'
 
 const BasketProductItem = ({productData}) => {
  const {title,image,id,price , quantity}=productData
  const{actions}=useBasket()
   return (
     <div className="bg-zinc-200 p-4 m-4 rounded-md">
      <img src={image} alt={title} width={150} height={150}/>
      <h2 className="text-xl text-slate-900 font-bold	">{title}</h2>


      <div className='flex justify-between mb-3'>
      <p className="text-emerald-800 font-bold	">price : </p>
      <p className="font-bold	">{price} $</p>
      </div>

      <div className='flex justify-between mb-3'>
      <p className="text-gray-800 font-bold	">QTY </p>
      <p className="font-bold	">{quantity}</p>
      </div>

      <button className="bg-red-600 p-2 rounded text-white" onClick={()=>actions.removeFromBasket(productData)}> remove item </button>
     </div>
   )
 }
 
 export default BasketProductItem