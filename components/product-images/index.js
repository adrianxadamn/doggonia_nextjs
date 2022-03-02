import React from 'react';
import Slider from 'react-slick';
import classes from './product-images.module.scss';
import {getProductImages} from '@/utils/helpers';
import Image from 'next/image';

const ProductImages = ({product}) => {
	const images = getProductImages(product);

  const settings = {
		dots: true,
		arrow: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		customPaging: function(i) {
			return (
				<a>
					<div className={classes.slickThumbnail}>
						<Image src={images[i].originalSrc} layout="fill" objectFit="contain" />
					</div>
				</a>
			)
		}
	};

  return (
		<div className={classes.productImages}>
			<Slider className={classes.productSlider} {...settings}>
				{images.map(image => {
					return (
						<div key={image.id} className={classes.productImage}>
							<Image src={image.originalSrc} layout="fill" objectFit="contain" />
						</div>
					);
				})}
			</Slider>
		</div>
  );
};

export default ProductImages;