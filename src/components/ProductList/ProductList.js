import React, { useState } from 'react'
import Cart from '../Cart/Cart'
import Product from './Product/Product'
import './ProductList.css'

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
]

const ProductList = () => {
  const [items, setItems] = useState([]);

  const onAdd = (item) => {
    setItems(prevState => ([...prevState, item]))
  }

  const onRemove = (item) => {
    setItems(prevState =>{
      if(!prevState.length){
        return [];
      }
      let newState = [...prevState]

      let itemIndex = newState.findIndex(x => x.name === item.name)
      if(itemIndex <0){
        return prevState;
      }
      newState.splice(itemIndex,1)

      return newState;
    })
  }

  const getTotal = () => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(items.reduce((sum, item) => sum + item.price, 0))
  }
  return (
    <div className='wrapper-product'>
      {products.map((item, index) => <Product
        key={index}
        emoji={item.emoji}
        onAdd={()=> onAdd(item)}
        onRemove={()=> onRemove(item)}
      />)}
      <Cart items={items.length} total={getTotal()} />
    </div>
  )
}

export default ProductList