import React from 'react';
import classNames from 'classnames';
// Styles
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = (props) => (
  <div className={classNames(styles.card, { [props.className]: props.className })}>
    {props.children}
  </div>
);

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Card;
