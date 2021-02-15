import React, { useReducer } from 'react'
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

const getTotal = (items) => {
  return currencyFormat(items.reduce((sum, item) => sum + item.price, 0))
}

const cartReducer = (state, action) => {
  console.log(action)
  switch (action.type){
    case 'add': 
      return [...state, action.payload]
    case 'remove':
        if(!state.length){
          return [];
        }
        let newState = [...state]  
        let itemIndex = newState.findIndex(x => x.name === action.payload.name)
        if(itemIndex <0){
          return state;
        }
        newState.splice(itemIndex,1)  
        return newState;
    default: return state;
  }
}

const ProductList = () => {
  const [items, setItems] = useReducer(cartReducer, []);

  const onAdd = (item) => {
    setItems({type:'add', payload:item})
  }

  const onRemove = (item) => {
    setItems({type:'remove', payload:item})
  }

  return (
    <div className='wrapper-product'>
      {products.map((item, index) => <Product
        key={index}
        emoji={item.emoji}
        onAdd={()=> onAdd(item)}
        onRemove={()=> onRemove(item)}
      />)}
      <Cart items={items} total={getTotal(items)} currencyFormat={currencyFormat} />
    </div>
  )
}

export default ProductList