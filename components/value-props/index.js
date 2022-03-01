import React from 'react';
import classes from './value-props.module.scss';
import DogBowlSVG from '@/svgs/dog-bowl.svg';
import LightBulbSVG from '@/svgs/lightbulb-innovation.svg';
import PayingItForwardSVG from '@/svgs/paying-it-forward.svg';

const ValueProps = () => {
  return (
    <div className={classes.valueProps}>
      <h3>What We Offer</h3>
      <ul>
        <li>
          <div>
            <LightBulbSVG />
            <h3>Innovative Products</h3>
            <p>Our products are designed to go above and beyond your expectations in both functionality and aesthetics.</p>
          </div>
        </li>
        <li>
          <div>
            <DogBowlSVG />
            <h3>Hand-Picked Collections</h3>
            <p>We curate related products into collections that provide an all-in-one experience for you and your pup!</p>
          </div>
        </li>
        <li>
          <div>
            <PayingItForwardSVG />
            <h3>Paying it Forward</h3>
            <p>A portion of total sales are donated to a local animal shelter or charity.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ValueProps;