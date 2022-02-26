import React from 'react';
import Link from 'next/link';
import classes from './promo-bar.module.scss';

const PromoBar = (props) => {
  return (
    <div className={classes.promoBar}>
      <Link href="/collection/shop-all">
        <a>
          <p>📬 GRAND OPENING - FREE SHIPPING ON ALL ORDERS IN THE UNITED STATES. USE CODE “DOGGONIA” FOR AN EXTRA 25% OFF! 🌎</p>
        </a>
      </Link>
    </div>
  );
};

export default PromoBar;