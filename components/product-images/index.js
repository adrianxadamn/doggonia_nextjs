import React from 'react';
import Slider from 'react-slick';
import classes from './product-images.module.scss';
import {getProductImages} from '@/utils/helpers';
import Image from 'next/image';

const ProductImages = ({product}) => {
  const settings = {
		dots: false,
		arrow: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

  const images = getProductImages(product);

  return (
		<Slider className={classes.productSlider} {...settings}>
			{images.map(image => {
        console.log(image)
        return (
          <div key={image.id} className={classes.productImage}>
            <Image src={image.originalSrc} layout="fill" objectFit="contain" />
          </div>
        );
			})}
		</Slider>
  );
};

export default ProductImages;