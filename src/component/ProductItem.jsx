import React from 'react'
import useBasket from '../store/Basket'

const ProductItem = ({productData}) => {
  const {title,image,id,price}=productData
  const{actions}=useBasket()
  
  //const {addToBasket}=useBasket((state)=>state.actions)
  return (
    <div className='bg-zinc-200 m-4 p-4 rounded-md'>
<img src={image} alt={title} width={100} height={100} />
<h2 className='text-xl text-slate-900 font-bold'>{title}</h2>
<div className='flex justify-between mb-3'>
  <p>price :</p>
  <p>{price} $</p>
</div>
<button className="bg-cyan-600 p-2 rounded text-white " onClick={()=>actions.addToBasket(productData)} >add item</button>

    </div>
  )
}

export default ProductItem