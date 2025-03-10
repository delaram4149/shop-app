import React, { memo } from 'react'

const FormComponent = memo(({handleSubmit}) => {
    console.log("render FormComponent");
    
  return (
    <div>
        FormComponent
        <button onClick={handleSubmit}></button>
    </div>
  )
})

export default FormComponent