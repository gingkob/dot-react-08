import React from 'react';
import ProductDetails from '../ProductList/ProductDetails/ProductDetails'
import './Cart.css'

const Cart = ({ total, items, currencyFormat }) => {
  return (
    <div className="wrapper-cart">
      {items.length ? <ol style={{display:'flex', justifyContent:'space-between', flexDirection:'column', padding:"0px 20px 0px 30px", marginTop:'0px'}}>{items.map((item, i) => (<li key={i}><ProductDetails item={item} currencyFormat={currencyFormat}/></li>))}</ol> : null}
      <div style={{textAlign:"right", borderTop:'1px solid green', paddingTop:'5px'}}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <span>Shopping Cart:</span> <span>{items.length} total items.</span>
        </div>
        <div>Total: {total}</div>
      </div>

    </div>
  )
}

export default Cart
