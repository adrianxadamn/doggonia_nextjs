import { getProductSlugs, getProduct } from '@/lib/shopify'
import ProductDetails from '@/components/product-details';
import ProductDescription from '@/components/product-description';
import ProductImages from '@/components/product-images';

const ProductPage = ({ productData }) => {  
  return (
    <div className="productPage">
      <div className="productMain">
        <ProductDetails product={productData} />
        <ProductDescription product={productData} />
      </div>
      <ProductImages product={productData} />
    </div>
  )
}

export async function getStaticPaths({ params }) {

  const productSlugs = await getProductSlugs();

  console.log("productSlugs:", productSlugs);

  const paths = productSlugs.map((slug) => {    
    const product = slug.node.handle
    return {
      params: { product }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const productData = await getProduct(params.product)  

  return {
    props: {
      productData,
    },
  }
}

export default ProductPage