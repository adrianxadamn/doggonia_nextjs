import React from 'react';
import { getPage } from '@/lib/shopify';
import AccordionTabs from '@/components/accordion-tabs';

const FrequentlyAskedQuestions = ({pageData}) => {
  return (
    <div className="basicPage">
      <h1>{pageData.title}</h1>
      <AccordionTabs content={pageData.body} />
    </div>
  );
};

export async function getStaticProps() {
  const pageData = await getPage('frequently-asked-questions');

  return {
    props: {
      pageData,
      handle: pageData.handle
    },
  }
}


export default FrequentlyAskedQuestions;