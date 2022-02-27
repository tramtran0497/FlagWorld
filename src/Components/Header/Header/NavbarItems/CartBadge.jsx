import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../HeaderStyle/cart.scss"

function CartBadge() {
  const [isShow, setIsShow] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { listCarts } = useSelector((state) => state.cart);

  useEffect(() => {
    const listQty = listCarts?.map((cart) => cart.qty);
    if (listQty) {
      const initialValue = 0;
      const totalQty = listQty.reduce(
        (previous, current) => previous + current,
        initialValue
      );
      setQuantity(totalQty);
    }
  }, [listCarts]);
  const handleShow = () => setIsShow(!isShow);
  return (
    <div className="cart">
      <Badge badgeContent={quantity} color="secondary" className="cart__badge__icon">
        <ShoppingCart color="action" onClick={handleShow} className="cart__badge__icon"/>
      </Badge>
      <div
        className="cart__list"
        style={{ display: isShow ? "block" : "none" }}
      >
        {listCarts && listCarts.map(cart => {
          return (
            <div key={cart.name} className="cart__list__display">
              <img src={cart.flag} alt="The country flag"/>
              <h4>{cart.name}</h4>
              <div className="cart__list__display__qty">
                <Remove/>
                <p>{cart.qty}</p>
                <Add/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartBadge;
