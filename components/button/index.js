import Link from 'next/link';
import classes from './button.module.scss';

const Button = (props) => {
  return (
    <button type={props.type} className={classes.button + ' ' + `${props.extraClasses || ''}`} disabled={props.isDisabled}>
      {props.children}
    </button>
  );
};

export default Button;