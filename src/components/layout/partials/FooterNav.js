import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a target="_blank" href="wa.me/6287761472255">Contact</a>
        </li>
        <li>
          <a target="_blank" href="mailto:baguswirawan1999@gmail.com">About us</a>
        </li>
        <li>
          <a target="_blank" href="mailto:baguswirawan1999@gmail.com">Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;