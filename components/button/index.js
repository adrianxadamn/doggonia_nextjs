import Link from 'next/link';
import classes from './button.module.scss';

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.button + ' ' + `${props.extraClasses || ''}`}>{props.children}</a>
      </Link>
    )
  }
  return (
    <button type={props.type} className={classes.button + ' ' + `${props.extraClasses || ''}`} disabled={props.isDisabled}>
      {props.children}
    </button>
  );
};

export default Button;