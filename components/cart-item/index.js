import React from 'react';
import classes from './cart-item.module.scss';
import QtyBox from '@/components/qty-box';
import Image from 'next/image';
import Link from 'next/link';
import { getProductImages, getLineItemSubTotal } from '@/utils/helpers';
import { useUpdateCartQuantityContext } from '@/context/CartContext';

const CartItem = ({item}) => {
  
  const images = getProductImages(item.product);
  const updateCartItemQuantity = useUpdateCartQuantityContext();

  const handleCartUpdateQty = (step) => {
    if (step === 'inc') {
      updateCartItemQuantity(item.variantId, item.variantQuantity + 1);
    } else {
      updateCartItemQuantity(item.variantId, item.variantQuantity - 1);
    }
  };

  return (
    <li className={classes.cartItem}>
      <div className={classes.cartImage}>
        <Link href={`/products/${item.product.handle}`}>
          <a>
            <Image src={images[0].originalSrc} alt={item.variantTitle} layout="fill" objectFit="contain"  />
          </a>
        </Link>
      </div>
      <div className={classes.cartItemContent}>
      <h3>
        <Link href={`/products/${item.product.handle}`}>
          <a>
            {item.product.title} - {item.variantTitle}
          </a>
        </Link>
      </h3>
        <div className={classes.cartItemQtyBoxTotalWrap}>
          <QtyBox quantity={item.variantQuantity} handleUpdateQty={handleCartUpdateQty} />
          ${getLineItemSubTotal(item).toFixed(2)}
        </div>
      </div>
    </li>
  );
};

export default CartItem;