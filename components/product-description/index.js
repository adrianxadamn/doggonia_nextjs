import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import classes from './product-description.module.scss';

const ProductDescription = ({product}) => {
  return (
    <div className={classes.productDescription}>{ReactHtmlParser(product.descriptionHtml)}</div>
  );
};

export default ProductDescription;