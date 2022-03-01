import React, { useState, useEffect } from 'react';
import QtyBox from '@/components/qty-box';
import classes from './product-form.module.scss';
import { getAllVariants } from '@/utils/helpers';
import { useCartContext, useAddToCartContext } from '@/context/CartContext';

const ProductForm = ({product}) => {

  const variants = getAllVariants(product);
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useAddToCartContext();

  const handleVariantChange = (id) => {
    console.log(id);
    const variant = variants.find(variant => variant.id === id);
    setSelectedVariant(variant);
  };

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
    console.log("selectedVariant:", selectedVariant);
    if (quantity !== '') {
      addToCart({
        product,
        variantId: selectedVariant.id, // required
        variantQuantity: quantity, // required
        variantPrice: selectedVariant.price,
        variantTitle: selectedVariant.title,
      });
    }
  }

  useEffect(() => {

  }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={classes.productForm}>
      <select onChange={(e) => handleVariantChange(e.target.value)}>
        {variants.map(variant => {
          return <option value={variant.id} key={variant.id}>{variant.title}</option>
        })}
      </select>
      <QtyBox quantity={quantity} handleUpdateQty={handleUpdateQty} />
      <button type="text">Add to cart</button>
    </form>
  );
};

export default ProductForm;