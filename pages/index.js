import Head from 'next/head';

import HomepageHero from '../components/homepage-hero';
import MissionStatment from '../components/mission-statement';
import ValueProps from '../components/value-props';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Doggonia Sandbox Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageHero />
      <MissionStatment />
      <ValueProps />
    </div>
  )
}
