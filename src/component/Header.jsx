 import React from 'react'
import { NavLink } from 'react-router-dom'
import useBasket from '../store/Basket'
 
 const Header = () => {
  const{items}=useBasket()
   return (
    
     
     <>
            <header className="p-4 bg-sky-100 ">
      <nav className="flex justify-between gap-4">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-gray-800"
              : isActive
              ? "text-blue-600 font-bold"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-gray-800"
              : isActive
              ? "text-blue-600 font-bold"
              : ""
          }
          to="/basket"
        >
          Basket {items.length}
        </NavLink>
      </nav>
    </header>
     </>
   )
 }
 
 export default Header