import Image from 'next/image';
import DoggoniaLogoWhite from "../svgs/doggonia-logo-white.svg";
import classes from './homepage-hero.module.scss';
import Link from 'next/link';

const HomepageHero = ({props}) => {
  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}>
        <div className={classes.logo}>
          <DoggoniaLogoWhite />
          <h2>Check out our products!</h2>
          <Link href="/collections/shop-all">
            <a>Shop Now</a>
          </Link>
        </div>
      </div>
      <div style={{ position: "relative", width: "100%", paddingBottom: "50%" }}>
        <Image src="/images/hphero-1_D.jpg" alt="Homepage Hero" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default HomepageHero;