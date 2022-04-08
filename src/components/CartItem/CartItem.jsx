import React from 'react'
import { connect } from 'react-redux';
import { AddToCart, RemoveFromCart } from '../../redux/cart/CartActions';

import './CartItem.css';

const CartItem = ({item, addToCart, removeFromCart }) => {

  const { id, title, price, quantity } = item;

  return (
      <div className='cartitem'>
        <div className="cartitem-top">
          <p>{title}</p>
          <div className='cart-button' style={{ flex: '0.3' }}>
              <div onClick={() => removeFromCart({id: id, quantity: quantity})}><p>-</p></div>
              <p>{item.quantity}</p>
              <div onClick={() => addToCart({id: id, title: title, price: price})}><p>+</p></div>
          </div>         
        </div>
        <div className="cartitem-bottom">
          <p className='cartitem-bottom-detail-price'>₹ {price.toFixed(2)} x {quantity}</p>
          <p className='cartitem-bottom-price'><strong>₹ {(price * quantity).toFixed(2)}</strong></p>
        </div>
      </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
      addToCart: item => dispatch(AddToCart(item)),
      removeFromCart: item => dispatch(RemoveFromCart(item))
  }
}

export default connect(null,mapDispatchToProps)(CartItem)