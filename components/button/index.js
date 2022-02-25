import Link from 'next/link';
import classes from './button.module.scss';

const Button = (props) => {
  return (
    <div className={classes.button}>
      {props.text}
    </div>
  );
};

export default Button;