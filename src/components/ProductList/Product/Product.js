import React from 'react'
import './Product.css'

const Product = ({emoji, onAdd, onRemove}) => {
  return (
    <div className='wrapper-product'>
      <div className="product"><span role="img" aria-label="ice cream">{emoji}</span></div>
      <button onClick={onAdd}>Add</button> <button onClick={onRemove}>Remove</button>
    </div>
  )
}

export default Product
