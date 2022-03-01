import React from 'react';
import GridItem from '@/components/grid-item';
import classes from './grid.module.scss';
const Grid = ({products}) => {
  return (
    <ul className={classes.grid}>
      {products.map(item => <GridItem key={item.id} item={item} />)}
    </ul>
  );
};

export default Grid;