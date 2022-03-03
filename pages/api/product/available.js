/*
  checks if product's variants are available
*/

import { getProduct } from '@/lib//shopify';

export default async function handler(req, res) {
  const {
    query: { id },
  } = req
  const product = await getProduct(id);
  res.json(product.variants.edges.map(variant => variant.node));

}