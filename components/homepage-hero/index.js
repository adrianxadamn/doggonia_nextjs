import Image from 'next/image';
import DoggoniaLogoWhite from "@/svgs/doggonia-logo-white.svg";
import classes from './homepage-hero.module.scss';
import Button from '@/components/button';

const HomepageHero = ({props}) => {
  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}>
        <div className={classes.logo}>
          <DoggoniaLogoWhite />
        </div>
        <p>Check out our products!</p>
        <Button link="/collections/shop-all" extraClasses={classes.button}>Shop Now</Button>
      </div>
      <div style={{ position: "relative", width: "100%", paddingBottom: "50%" }}>
        <Image src="/images/hphero-1_D.jpg" alt="Homepage Hero" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default HomepageHero;