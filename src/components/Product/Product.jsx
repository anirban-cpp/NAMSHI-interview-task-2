import React from 'react';
import { connect } from 'react-redux';
import { AddToCart, RemoveFromCart } from '../../redux/cart/CartActions';

import './Product.css';

const Product = ({id, image, title, price, description, cart, addToCart, removeFromCart}) => {

    const item = cart?.find(e => e.id === id);

  return (
    <div className='product'>
        <div className="product-left">
            <img src={image} alt={title}/>
        </div>
        <div className="product-middle">
            <p className='product-middle-title'>{title}</p>
            <p className='product-middle-price'><strong>₹ {price}</strong></p>
            <p className='product-middle-desc'>{description.length > 150 ? description.substring(0,150)+"....." : description}</p>
        </div>
        <div className="product-right">
            {
                !item ? (
                    <button className='add' onClick={() => addToCart({id: id, title: title, price: price})}>Add</button>
                ) : (
                    <div className='cart-button'>
                        <div onClick={() => removeFromCart({id: id, quantity: item.quantity})}><p>-</p></div>
                        <p>{item.quantity}</p>
                        <div onClick={() => addToCart({id: id, title: title, price: price})}><p>+</p></div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

const mapStateToprops = state => {
    return {
        cart: state.cart.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: item => dispatch(AddToCart(item)),
        removeFromCart: item => dispatch(RemoveFromCart(item))
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(Product)