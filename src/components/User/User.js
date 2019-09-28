import React from 'react';
import PropTypes from 'prop-types';
// Styles
import styles from './User.scss';

const User = (props) => (
  <div className={styles.user}>
    <i className="fa fa-user"/>
    {props.children}
  </div>
);

User.propTypes = {
  children: PropTypes.any,
};

export default User;
