import HomepageHero from '@/components/homepage-hero';
import MissionStatment from '@/components/mission-statement';
import ValueProps from '@/components/value-props';

import { getPageData } from '@/lib/storyblok.js';

export default function Home({pageData}) {
  const content = pageData.content.body ; 
  return (
    <div>
      {content.map(item => {
        switch(item.component) {
          case 'hero':
            return <HomepageHero key={item._uid} />
          case 'mission_statement':
            return <MissionStatment key={item._uid} />
          default:
            return '';
        }
      })}
      <ValueProps />
    </div>
  )
}

export async function getStaticProps({content}) {
  const pageData = await getPageData(112892821);
  
  return {
    props: {
      pageData
    },
  }
}