import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './grid-item.module.scss';
import {getFirstVariant} from '../../helpers';
const GridItem = ({item}) => {

  console.log(item);

  const image = item.images.edges[0].node;

  const firstVariant = getFirstVariant(item);

  console.log("firstVariant:", firstVariant);

  return (
    <li className={classes.gridItem}>
      <div className={classes.gridItemImage}>
        <Link href={`/products/${item.handle}`}>
          <a style={{ display: 'block', position: "relative", width: "100%", paddingBottom: "100%" }}>
            <Image src={image.originalSrc} alt={item.title} layout="fill" objectFit="contain" />
          </a>
        </Link>
      </div>
      <div className={classes.gridItemContent}>
        <Link href={`/products/${item.handle}`}>
          <a>
            <h2>{item.title}</h2>
          </a>
        </Link>
        <div className={classes.gridItemPriceWrap}>
          {firstVariant.compareAtPrice ? (
            <>
              <span className={classes.gridItemPriceOnSale}>${firstVariant.price}</span>
              <span className={classes.gridItemCompareAtPrice}>${firstVariant.compareAtPrice}</span>
            </>
          ) : (
            <span>${firstVariant.price}</span>
          )}
        </div>
      </div>
    </li>
  );
};

export default GridItem;