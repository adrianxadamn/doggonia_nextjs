import React, { useState, useEffect } from 'react';
import Button from '@/components/button';
import QtyBox from '@/components/qty-box';
import classes from './product-form.module.scss';
import { getAllVariants } from '@/utils/helpers';
import { useAddToCartContext } from '@/context/CartContext';
import Select from 'react-select';

const ProductForm = ({product}) => {

  const variants = getAllVariants(product);
  const [selectedVariant, setSelectedVariant] = useState({
    'variant': variants[0],
    'value': variants[0].id,
    'label': variants[0].title
  });
  const [quantity, setQuantity] = useState(1);
  const addToCart = useAddToCartContext();

  const options = variants.map(variant => {
    return {
      variant,
      value: variant.id,
      label: variant.title
    }
  });

  const handleUpdateQty = (step) => {
    if (step === 'inc') {
      const newQuantity = quantity + 1
      setQuantity(newQuantity);
    } else {
      if (quantity <= 1) {
        return false;
      } else {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { variant } = selectedVariant;
    if (quantity !== '') {
      addToCart({
        product,
        variantId: variant.id, // required
        variantQuantity: quantity, // required
        variantPrice: variant.price,
        variantTitle: variant.title,
      });
    }
  }

  useEffect(() => {

  }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={classes.productForm}>
      <Select 
        className={classes.select}
        defaultValue={selectedVariant}
        onChange={setSelectedVariant}
        options={options} />
      <QtyBox quantity={quantity} handleUpdateQty={handleUpdateQty} />
      <Button props={{type: 'text'}}>
        Add to cart
      </Button>
    </form>
  );
};

export default ProductForm;