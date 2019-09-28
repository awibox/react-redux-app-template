import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import styles from './Button.scss';


const Button = (props) => {
  const { icon, children, onClick } = props;
  return (
        <div className={classNames(styles.btn, { [styles.btnIcon]: icon })} onClick={onClick}>
            {icon && <span className={styles.icon}><i className={`fa ${icon}`}></i></span>}
            {children}
        </div>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
};

export default Button;
