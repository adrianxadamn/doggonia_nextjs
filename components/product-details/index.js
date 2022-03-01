import React from 'react';
import classes from './product-details.module.scss';
import ProductPrice from '../product-price';
const ProductDetails = ({product}) => {
  return (
    <div className={classes.productDetails}>
      <h1>{product.title}</h1>
      <ProductPrice product={product} extraClasses={classes.productDetailsPriceWrap} />
    </div>
  );
};

export default ProductDetails;