 import React from 'react'
 import logoImage from '../image/Minimal Shopping.png'
 import shopImage from '../image/logo.png'
import { NavLink } from 'react-router-dom'
 const Header = () => {
   return (
     <header className='p-2 m-2'>
           
         <div className='flex space-x-4 justify-start '>
         <img src={shopImage} alt="shop image"  className=''/>
         <img src={logoImage} alt="logo image" className=''   />


         <nav className='flex space-x-6 items-center'>
          <NavLink className={({isActive , isPending})=>
          isPending ? "text-gray-800 font-bold p-2 m-2"
          : isActive ? 
          "text-orange-500 font-bold p-2 m-2"
          : ''
          } to={'/'}>
              Category
          </NavLink>
         </nav>
         
         </div>



     </header>
   )
 }
 
 export default Header