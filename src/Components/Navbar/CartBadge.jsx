import { ShoppingCart } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';

function CartBadge() {
    const [hiddenList, setHiddenList] = useState(true)
    const [quantity, setQuantity] =  useState(0)
    const {listCart} = useSelector(state => state.cart)

    useEffect(() => {
        const listQty = listCart.map(cart => cart.qty)
        if(listQty){
            const initialValue = 0
            const totalQty = listQty.reduce((previous, current) => previous + current, initialValue)
            setQuantity(totalQty)
        }
    }, [listCart])
    const handleHidden = () => {
        setHiddenList(!hiddenList)
    }
  return (
    <div>
        <Badge badgeContent={quantity} color="primary">
            <ShoppingCart color="action" onClick={handleHidden}/>
        </Badge>
        <div className='list-cart' style={{display: hiddenList ? "none": "block"}}>
           {listCart.map(cart => {
               return (
                   <div key={cart.name}>
                        <p>{cart.name}</p>
                        <p>{cart.qty}</p>
                   </div>
               )
           })}
        </div>
    </div>
  )
}

export default CartBadge