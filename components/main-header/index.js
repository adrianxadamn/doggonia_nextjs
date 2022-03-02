import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import { useCartContext, useAddToCartContext } from '@/context/CartContext';
import PromoBar from '@/components/promo-bar';
import LogoBlack from '@/svgs/doggonia-logo-black.svg';
import classes from './main-header.module.scss';

const MainHeader = ({props}) => {

  const setShowCart = useCartContext().setShowCart;

  return (
    <div className={classes.mainHeader}>
      <PromoBar />
      <nav>
        <ul className={classes.navLeft}>
          <li>
            <Link href="/collections/shop-all">
              <a>Shop</a>
            </Link>
          </li>
          <li>
            <Link href="/pages/about-doggonia">
              <a>About</a>
            </Link>
          </li>
        </ul>
        
        <div className={classes.navCenter}>
          <Link href="/">
            <a>
              <LogoBlack />
            </a>
          </Link>
        </div>

        <div className={classes.navRight}>
          <ul className={classes.navRightLinks}>
            <li>
              <Link href="/pages/frequently-asked-questions">
                <a>FAQ</a>
              </Link>
            </li>
            <li>
              <Link href="/pages/shipping-refunds">
                <a>Shipping</a>
              </Link>
            </li>
          </ul>
          <button onClick={() => setShowCart(true)} className={classes.cartBtn}>
            <FontAwesomeIcon 
              icon={faShoppingCart}
              style={{ fontSize: 25, color: "black" }}
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;