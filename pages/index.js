import client from '../lib/sanity';
import HomepageHero from '@/components/homepage-hero';
import MissionStatment from '@/components/mission-statement';
import ValueProps from '@/components/value-props';

import { getPageData } from '@/lib/storyblok.js';

// Create a query called homepageQuery
const homepageQuery = `*\[_id == "a1d8e4f1-c160-4521-b054-13f4aead1eb7"\][0]`;


export default function Home({pageData}) {
  console.log(pageData)
  const content = pageData.content ;
  return (
    <div>
      {content.map(item => {
        switch(item._type) {
          case 'hero':
            return <HomepageHero props={item} key={item._uid} />
          case 'mission-statement':
            return <MissionStatment props={item} key={item._uid} />
          default:
            return '';
        }
      })}
      <ValueProps />
    </div>
  )
}

export async function getStaticProps({content}) {
  const pageData = await client.fetch(homepageQuery);
  return {
    props: {
      pageData
    },
  }
}