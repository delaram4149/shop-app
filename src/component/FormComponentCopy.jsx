import React, { useCallback, useState } from 'react'
import ListItems from '../component/ListItems';
import ShowCount from '../component/ShowCount';
import FormComponent from '../component/FormComponent';

const HomePage = () => {
//useCallBack  
const formSubmit = useCallback(() => {}, []);
  
  const [number , setNumber]=useState(0);
  const [count, setCount] = useState(0)
  return (
    <div>
          <div className='bg-red-200 p-3 m-3'>
          <button onClick={()=>setNumber(number + 1)} className='bg-gray-200 m-2 p-2 rounded-md'> increase number </button>

              <p>{number}</p>

          </div>

          <div className='bg-blue-200 p-3 m-3'>
          <button onClick={()=>setCount(count+ 1)} className='bg-gray-200 m-2 p-2 rounded-md'> increase count </button>

             <ShowCount count ={count}/> 
   

          </div>
      <hr/>

      <ListItems/>
      <hr />

      <FormComponent handleSubmit={formSubmit}/>
    </div>

  )
}

export default HomePage