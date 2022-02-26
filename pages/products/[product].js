import { getProductSlugs, getProduct } from '../../lib/shopify'

const ProductPage = ({ productData }) => {  
  return (
    <div>
      Product Page
    </div>
  )
}

export async function getStaticPaths({ params }) {

  const productSlugs = await getProductSlugs();

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