import React from 'react';
import classes from './cart-item.module.scss';
import QtyBox from '@/components/qty-box';
import Image from 'next/image';
import { getProductImages, getLineItemSubTotal } from '@/utils/helpers';

const CartItem = ({item}) => {
  
  const images = getProductImages(item.product);

  const handleCartUpdateQty = () => {

  };

  return (
    <li className={classes.cartItem}>
      <div className={classes.cartImage}>
        <Image src={images[0].originalSrc} alt={item.variantTitle} layout="fill" objectFit="contain"  />
      </div>
      <div className={classes.cartItemContent}>
        <h3>{item.product.title} - {item.variantTitle}</h3>
        <div className={classes.cartItemQtyBoxTotalWrap}>
          <QtyBox quantity={item.variantQuantity} handleUpdateQty={handleCartUpdateQty} />
          ${getLineItemSubTotal(item)}
        </div>
      </div>
    </li>
  );
};

export default CartItem;