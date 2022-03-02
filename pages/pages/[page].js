import React from 'react';
import { getPageSlugs, getPage } from '@/lib/shopify';
import ReactHtmlParser from 'react-html-parser';

const BasicPages = ({pageData}) => {
  return (
    <div className="basicPage">
      <h1>{pageData.title}</h1>
      <div>{ReactHtmlParser(pageData.body)}</div>
    </div>
  );
};

export async function getStaticPaths({ params }) {

  const productSlugs = await getPageSlugs();
  
  const paths = productSlugs.map((slug) => {    
    const page = slug.node.handle
    return {
      params: { page }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const pageData = await getPage(params.page)  

  return {
    props: {
      pageData,
      handle: pageData.handle
    },
  }
}

export default BasicPages;