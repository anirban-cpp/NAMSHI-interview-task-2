import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import EmptyCart from '../../assets/empty-cart.png';
import { ClearCart } from '../../redux/cart/CartActions';
import { getTotal } from '../../utils/getTotal';
import CartItem from '../CartItem/CartItem';

import './Cart.css';

const Cart = ({cart,clearCart}) => {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(cart.length > 0) {
      const cart_total = getTotal(cart);
      setTotal(cart_total);
    }
    else
      setTotal(0)
  }, [cart])
  

  return (
      <div className='cart-container'>
        <div className='cart-title'>
          <div className='cart-title-left'>
            <h3>My Cart</h3>
            <p>{cart.length} item(s)</p>
          </div>
          {
            cart.length > 0 && <div className='cart-title-right' onClick={() => clearCart()}><p>Clear Cart</p></div>
          }
        </div>
        <div className='divider'/>
        {
          cart.length > 0 ? (
            cart.map(item => (
              <CartItem key={item.id} item={item}/>
            ))
          ) : (
            <img src={EmptyCart} alt="Cart is Empty" className='empty-cart-image'/>
          )
        }
        {
          cart.length > 0 && (
            <>
              <div className='divider-dotted'/>
              <div className='cart-total'>
                <div>
                  <p className='total'>Item Total</p>
                  <p className='total-items'>{cart?.length} item(s)</p>
                </div>
                <div>
                  <p className='price-total'>₹ {total}</p>
                </div>
              </div> 
              <button className='check-out'>Check Out</button>
            </>
          )
        }
      </div>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  }
}

const MapDispatchToProps = dispatch => {
  return {
    clearCart: () => dispatch(ClearCart())
  }
}

export default connect(mapStateToProps, MapDispatchToProps)(Cart);