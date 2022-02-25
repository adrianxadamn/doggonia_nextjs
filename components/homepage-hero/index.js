import Image from 'next/image';
import DoggoniaLogoWhite from "../../svgs/doggonia-logo-white.svg";
import classes from './homepage-hero.module.scss';
import Button from '../button';

const HomepageHero = ({props}) => {
  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}>
        <div className={classes.logo}>
          <DoggoniaLogoWhite />
        </div>
        <p>Check out our products!</p>
        <Button text="Shop Now" link="/collections/shop-all" />
      </div>
      <div style={{ position: "relative", width: "100%", paddingBottom: "50%" }}>
        <Image src="/images/hphero-1_D.jpg" alt="Homepage Hero" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default HomepageHero;