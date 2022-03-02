import React, { useState } from 'react';
import classes from './expandable-tab.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

const ExpandableTab = (props) => {
  const [show, setShow] = useState(false);
  return (
    <ul onClick={() => setShow(!show)}>
      {props.children.props.children[0]}
      {!!show && props.children.props.children[1]}

      {!!show ? (
        <div className={classes.toggle}>
          <FontAwesomeIcon icon={faMinus} />
        </div>
      ):(
        <div className={classes.toggle}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      )}
    </ul>

  );
};

export default ExpandableTab;