import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import LogoBlack from '../../svgs/doggonia-logo-black.svg';
import classes from './footer.module.scss';

const Footer = ({props}) => {

  const footerLinks = [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'All Products',
      url: '/collections/shop-all'
    },
    {
      title: 'Shipping',
      url: '/pages/frequently-asked-questions'
    },
    {
      title: 'Returns/Refund Policy',
      url: '/pages/returns-refund-policy'
    },
    {
      title: 'FAQ',
      url: '/pages/frequently-asked-questions'
    },
    {
      title: 'Contact Us',
      url: '/pages/contact-us'
    },
    {
      title: 'Terms of Service',
      url: '/pages/terms-of-service'
    },
    {
      title: 'Privacy Policy',
      url: '/pages/privacy-policy'
    }
  ];

  return (
    <footer className={classes.footer}>
      <div className={classes.footerBlock}>
        <h4>Site</h4>
        <ul className={classes.footerLinks}>
          {footerLinks.map((link, index) => {
            return <li key={index}>
              <Link href={link.url}><a>{link.title}</a></Link>
            </li>
          })}
        </ul>
      </div>
      <div className={classes.footerBlock}>
        <div className={classes.footerLogo}>
          <LogoBlack />
        </div>
        <span className={classes.footerCopyRight}>
          © 2022, <Link href="/"><a>Doggonia Supply Company</a></Link>
        </span>
        <div className={classes.footerInstagramLink}>
          <Link href="https://www.instagram.com/doggoniasupplyco/">
            <a><FontAwesomeIcon 
              icon={faInstagram}
            />Follow Us On Instagram</a>
          </Link>
        </div>
        <Image src="/images/secure-checkout.png" width="363" height="50" layout="fixed" />
      </div>
    </footer>
  );
};

export default Footer;