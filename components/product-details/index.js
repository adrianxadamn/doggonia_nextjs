import React from 'react';
import classes from './product-details.module.scss';
import ProductPrice from '@/components/product-price';
import ProductForm from '@/components/product-form';
const ProductDetails = ({product}) => {
  return (
    <div className={classes.productDetails}>
      <h1>{product.title}</h1>
      <ProductPrice product={product} extraClasses={classes.productDetailsPriceWrap} />
      <ProductForm product={product} />
    </div>
  );
};

export default ProductDetails;