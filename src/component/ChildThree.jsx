// import React, { useContext } from 'react'
// import { countContex } from '../route/Home'

// const ChildThree = () => {

//   //const data=  useContext(countContex)
//   const {number}=useContext(countContex)
  
//   return (
//     <div>ChildThree : {number}</div>
//   )
// }

// export default ChildThree



import React from 'react'
import useCount from '../store/count'

const ChildThree = () => {

 const increaseCount=useCount((state)=>(state.increaseCount))
  return (
    <>
     <div>ChildThree</div>
     <button onClick={()=>increaseCount()}>increase count</button>
    </>
   
  )
}

export default ChildThree