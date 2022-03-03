import React, { useState, useEffect } from 'react';
import Button from '@/components/button';
import QtyBox from '@/components/qty-box';
import classes from './product-form.module.scss';
import { getAllVariants } from '@/utils/helpers';
import { useAddToCartContext } from '@/context/CartContext';
import Select from 'react-select';
import useSWR from 'swr';
import axios from "axios"

// setup inventory fetcher
const fetchInventory = (url, id) => {
 return axios
    .get(url, {
      params: {
        id: id,
      },
    })
  .then((res) => res.data)
};

const ProductForm = ({product}) => {

  const { data: variantInfoRevalidate } = useSWR(
    ['/api/product/available', product.handle],
    (url, id) => fetchInventory(url, id),
    { errorRetryCount: 3 }
  );

  const [quantity, setQuantity] = useState(1);
  const [variants, setVariants] = useState(getAllVariants(product))
  const [selectedVariant, setSelectedVariant] = useState({
    variant: variants[0],
    value: variants[0].id,
    label: `${variants[0].title} ${!variants[0].availableForSale ? ` - Out of stock` : ''}`,
    isDisabled: !variants[0].availableForSale
  });
  
  const addToCart = useAddToCartContext();

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
    if (variantInfoRevalidate) {
      setVariants(variantInfoRevalidate);
    }
  }, [variantInfoRevalidate]);

  useEffect(() => {
    const index = variants.findIndex(variant => variant.id = selectedVariant.variant.id);
    setSelectedVariant({
      variant: variants[index],
      value: variants[index].id,
      label: `${variants[index].title} ${!variants[index].availableForSale ? ` - Out of stock` : ''}`,
      isDisabled: !variants[index].availableForSale
    });
  }, [variants]);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={classes.productForm}>
      <Select 
        className={classes.select}
        value={selectedVariant}
        onChange={setSelectedVariant}
        options={variants.map(variant => {
          return {
            variant,
            value: variant.id,
            label: `${variant.title} ${!variant.availableForSale ? ` - Out of stock` : ''}`,
            isDisabled: !variant.availableForSale
          }
        })} />
      <QtyBox quantity={quantity} handleUpdateQty={handleUpdateQty} />
      <Button type="text" isDisabled={selectedVariant.isDisabled}>
        {selectedVariant.isDisabled ? 
          'Out of stock'
          :
          'Add to cart'
        }
      </Button>
    </form>
  );
};

export default ProductForm;