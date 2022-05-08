import Image from 'next/image';
import DoggoniaLogoWhite from "@/svgs/doggonia-logo-white.svg";
import classes from './homepage-hero.module.scss';
import Button from '@/components/button';

import client from '../../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const HomepageHero = ({props}) => {
  console.log(props)
  return (
    <div className={classes.hero + ' ' + 'container--margin-expand'}>
      <div className={classes.heroContent}>
        <div className={classes.logo}>
          <DoggoniaLogoWhite />
        </div>
        <p>{props.subheading}</p>
        <Button link={props.CtaUrl} extraClasses={classes.button}>{props.CtaText}</Button>
      </div>
      <div style={{ position: "relative", width: "100%", paddingBottom: "50%" }}>
        <Image src={urlFor(props.backgroundImage.asset).url()} alt="Homepage Hero" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default HomepageHero;