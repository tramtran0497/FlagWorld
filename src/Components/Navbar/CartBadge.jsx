import { ShoppingCart } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import React, {useState} from 'react'

function CartBadge() {
    const [hiddenList, setHiddenList] = useState(true)
    const handleHidden = () => {
        setHiddenList(!hiddenList)
    }
  return (
    <div>
        <Badge badgeContent={4} color="primary">
            <ShoppingCart color="action" onClick={handleHidden}/>
        </Badge>
        <div className='list-cart' style={{display: hiddenList ? "none": "block"}}>
            LIST
        </div>
    </div>
  )
}

export default CartBadge