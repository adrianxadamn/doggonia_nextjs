import React from 'react';
import { useCartContext } from '@/context/CartContext';
import CartItem from '@/components/cart-item';
import Button from '@/components/button';
import classes from './inline-cart.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose
} from "@fortawesome/free-solid-svg-icons";
import { getCartSubTotal } from '@/utils/helpers';
const InlineCart = ({props}) => {

  const items = useCartContext().cart;
  const showCart = useCartContext().showCart;
  const setShowCart = useCartContext().setShowCart;

  if (!showCart) {
    return '';
  }
  
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
            <span>${getCartSubTotal(items).toFixed(2)}</span>
          </div>
          <p className={classes.cartDisclaimer}>Shipping and taxes calculated at checkout</p>
          <Button type="text">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default InlineCart;