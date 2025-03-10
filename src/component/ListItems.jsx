import React, { memo } from 'react'

const ListItems = memo(() => {
    console.log("render listItem component");
    
    const listData = [1,2,3,4,5,6,7,8,9];
  return (
    <div>
        <ul>
            {listData.map((item )=>{
              return <li key={item} className='p-2'> {item}</li>
            })}
        </ul>
    </div>
  )
})

export default ListItems