export const getFirstVariant = (product) => {
  if (product && product.variants && product.variants.edges) {
    return product.variants.edges[0].node;
  }
  return undefined
};

export const getProductImages = (product) => {
  if (product && product.images && product.images.edges) {
    return product.images.edges.map(image => image.node);
  }
  return undefined
};