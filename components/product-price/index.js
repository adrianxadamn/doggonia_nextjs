import React from 'react';
import { getFirstVariant } from '@/utils/helpers';
import classes from './product-price.module.scss';
const ProductPrice = ({product, extraClasses = []}) => {
  const firstVariant = getFirstVariant(product);
  return (
    <div className={`${classes.priceWrap} ${extraClasses}`}>
      {firstVariant.compareAtPrice ? (
        <>
          <span className={classes.priceOnSale}>${firstVariant.price}</span>
          <span className={classes.compareAtPrice}>${firstVariant.compareAtPrice}</span>
        </>
      ) : (
        <span>${firstVariant.price}</span>
      )}
    </div>
  );
};

export default ProductPrice;