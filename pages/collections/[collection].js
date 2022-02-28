import { getCollectionSlugs, getAllProductsInCollection } from '../../lib/shopify'
import Grid from '../../components/grid';

const CollectionPage = ({ products, collection }) => {  
  return (
    <div className="collectionPage">
      <h1>{collection.title}</h1>
      <Grid products={products} />
    </div>
  )
}

export async function getStaticPaths({ params }) {

  const collectionSlugs = await getCollectionSlugs();

  const paths = collectionSlugs.map((slug) => {    
    const collection = slug.node.handle
    return {
      params: { collection }
    }
  });

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const collectionData = await getAllProductsInCollection(params.collection); 

  return {
    props: {
      products: collectionData.products.map(product => product.node),
      collection: collectionData.collection
    },
  }
}

export default CollectionPage