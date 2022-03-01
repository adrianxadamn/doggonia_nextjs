import React from 'react';
import { useCartContext, useAddToCartContext } from '@/context/CartContext';
import CartItem from '@/components/cart-item';
import classes from './inline-cart.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose
} from "@fortawesome/free-solid-svg-icons";
const InlineCart = ({props}) => {

  const items = useCartContext().cart;
  const showCart = useCartContext().showCart;
  const setShowCart = useCartContext().setShowCart;

  if (!showCart) {
    return '';
  }
  
  console.log("items:", items);

  return (
    <div className={classes.inlineCart}>
      <div className={classes.overlay} onClick={() => setShowCart(false)}></div>
      <div className={classes.cartContent}>
        <div className={classes.cartHeader}>
          <h2>Your Cart</h2>
          <button onClick={() => setShowCart(false)} className={classes.cartCloseBtn}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <ul className={classes.cartItems}>
          {items.map(item => {
            return <CartItem key={item.variantId} item={item} />
          })}
        </ul>
        <div className={classes.cartFooter}>
          <div className={classes.cartSubtotal}>
            <span>Subtotal</span>
            <span>Total</span>
          </div>
          <p className={classes.cartDisclaimer}>Shipping and taxes calculated at checkout</p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default InlineCart;