import React, { useState } from 'react'
import Cart from '../Cart/Cart'
import Product from './Product/Product'
import './ProductList.css'

const products = [
  {
    emoji: '🍦',
    name: 'Ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'Donut',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'Watermelon',
    price: 4
  }
]

const currencyFormat = (number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number)
}

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
    return currencyFormat(items.reduce((sum, item) => sum + item.price, 0))
  }
  return (
    <div className='wrapper-product'>
      {products.map((item, index) => <Product
        key={index}
        emoji={item.emoji}
        onAdd={()=> onAdd(item)}
        onRemove={()=> onRemove(item)}
      />)}
      <Cart items={items} total={getTotal()} currencyFormat={currencyFormat} />
    </div>
  )
}

export default ProductList