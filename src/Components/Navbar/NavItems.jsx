import { Favorite, ShoppingCart } from '@mui/icons-material'
import React from 'react'
import '././NavbarStyle/NavItems.css'
import CartBadge from './CartBadge'
import HeartBadge from './HeartBadge'

function NavItems() {
  return (
    <div className='nav-items'> 
      <ul className='nav-items-list'>
        <li>Home</li>
        <li>Contact</li>
        <HeartBadge/>
        <CartBadge/>
      </ul>
    </div>
  )
}

export default NavItems