import React, { useReducer } from 'react'
import { initState, reducerr } from '../reducer/counterReducer'

const BasketPage = () => {

   const [state,dispatch]=useReducer(reducerr, initState)
  return (
  <div>
      <div>
      <button onClick={()=>dispatch({type: "increase"})} className='bg-red-400 p-3 m-3 rounded-md'>increase</button>
      <button  onClick={()=>dispatch({type: "decrease"})} className='bg-red-400 p-3 m-3 rounded-md'>decrease</button>
      <button  onClick={()=>dispatch({type: "reset"})} className='bg-red-400 p-3 m-3 rounded-md'>reset</button>
      
      <button  onClick={()=>dispatch({type: "increase  + 5" , payload : 5})} className='bg-red-400 p-3 m-3 rounded-md'>increase + 5</button>
    </div>
    <br />
    count : {state.count}
  </div>
  )
}

export default BasketPage