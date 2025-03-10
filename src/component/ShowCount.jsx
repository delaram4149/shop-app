import React, { memo } from 'react'

const ShowCount = memo(({count}) => {
    console.log("render show count");
    
  return (
    <div>
      <p> {count}</p>
    </div>
  )
})

export default ShowCount