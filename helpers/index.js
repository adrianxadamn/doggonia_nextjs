export const getFirstVariant = (product) => {
  if (product && product.variants && product.variants.edges) {
    return product.variants.edges[0].node;
  }
  return undefined
};