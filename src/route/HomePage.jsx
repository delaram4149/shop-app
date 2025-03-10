import React, { useState } from 'react'

const HomePage = () => {
  const [number , setNumber]=useState(0);
  return (
    <div>
      <button onClick={()=>setNumber(number + 1)} className='bg-gray-200 m-2 p-2 rounded-md'> increase </button>

      <p>{number}</p>
    </div>

  )
}

export default HomePage