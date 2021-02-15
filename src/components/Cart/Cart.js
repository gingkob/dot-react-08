import React from 'react'
import './Cart.css'

const Cart = ({total, items}) => {
  return (
    <div className="wrapper-cart">
      <div>
        Shopping Cart: {items} total items.
      </div>
      <div>Total: {total}</div>
    </div>
  )
}

export default Cart
