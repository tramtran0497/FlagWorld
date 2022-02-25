import { ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
    <div className="cart-badge">
      <Badge badgeContent={quantity} color="primary">
        <ShoppingCart color="action" onClick={handleShow} />
      </Badge>
      <div
        className="list-carts"
        style={{ display: isShow ? "block" : "none" }}
      >
        {listCarts?.map((cart) => {
          return (
            <div key={cart.name} className="cart-display">
              <h5>{cart.name}</h5>
              <p>{cart.qty}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartBadge;
