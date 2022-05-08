import React from 'react';
import classes from './mission-statement.module.scss';

const MissionStatement = ({props}) => {
  return (
    <div className={classes.missionStatement}>
      <div>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default MissionStatement;