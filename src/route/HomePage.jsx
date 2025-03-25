 import React, { useState } from 'react'
import Modal from '../component/Modal'
import FormComponent from '../component/FormComponent'
import WishIcon from '../component/icons/WishIcon'
 
 const HomePage = () => {

  const [isOpen, setIsOpen] = useState(false)
  const handleCloseModal =()=>{
    setIsOpen(false)
  }
   return (
     <div>
      <button onClick={()=>setIsOpen(true)} className='p-2 rounded-lg bg-red-600 text-white m-4'> open modal <WishIcon/> </button>

       <Modal visible ={isOpen} onclose={handleCloseModal}>
        <FormComponent/>
       </Modal>
     </div>
   )
 }
 
 export default HomePage