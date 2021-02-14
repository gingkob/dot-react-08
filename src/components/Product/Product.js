import React from 'react'
import './Product.css'

const Product = () => {
  return (
    <div className='wrapper-product'>
      <div>
        Shopping Cart: 0 total items.
      </div>
      <div>Total: 0</div>

      <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
      <button>Add</button> <button>Remove</button>
    </div>
  )
}

export default Product
