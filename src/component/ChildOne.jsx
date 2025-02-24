// import React, { useContext } from 'react'
// import ChildTwo from './ChildTwo'
// import { countContex } from '../route/Home'

// const ChildOne = ( ) => {
//     const{number:count,setCount}=useContext(countContex)
//   return (
//     <div>
//         <button onClick={()=>setCount(count+1)} className='border rounded-lg border-black shadow-lg'>increase</button>
//         <br />
//         ChildOne

//         <div>
//             <ChildTwo />
//         </div>
       

//     </div>
//   )
// }

// export default ChildOne
 import React from 'react'
import ChildTwo from './ChildTwo'
import useCount from '../store/count'
 
 const ChildOne = () => {

    const count =useCount((state)=> state.count)
   return (
    <>
    <p>count : {count}</p>
     <div>ChildOne
        <ChildTwo/>
     </div>

     
    </>
    
   )
 }
 
 export default ChildOne