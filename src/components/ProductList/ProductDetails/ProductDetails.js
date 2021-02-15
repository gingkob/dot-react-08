import React from 'react'
import './ProductDetails.css'

const ProductDetails = ({ item, currencyFormat }) => {
  return (
    <div className='wrapper-product-details'>
      <div>{item.name}: </div>
      <div>{currencyFormat(item.price)}</div>
    </div>
  )
}

export default ProductDetails
