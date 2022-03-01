import React from 'react';
import classes from './qty-box.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

const QtyBox = ({quantity, handleUpdateQty}) => {
  return (
    <div className={classes.qtyBoxWrapper}>
      <div className={classes.qtyBox}>
        <button onClick={() => handleUpdateQty('dec')}><FontAwesomeIcon icon={faMinus}/></button>
        <input type="number" min="1" size="2" className="quantity" name="quantity" id="quantity" value={quantity} readOnly />
        <button onClick={() => handleUpdateQty('inc')}><FontAwesomeIcon icon={faPlus}/></button>
      </div>
    </div>
  );
};

export default QtyBox;