import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './grid-item.module.scss';
import ProductPrice from '../product-price';
const GridItem = ({item}) => {
  const image = item.images.edges[0].node;
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
        <ProductPrice product={item} />
      </div>
    </li>
  );
};

export default GridItem;