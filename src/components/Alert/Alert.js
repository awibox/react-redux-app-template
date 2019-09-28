import React from 'react';
import PropTypes from 'prop-types';
// Styles
import styles from './Alert.scss';

const Alert = (props) => (
  <div className={styles.alert}>
    {props.children}
  </div>
);

Alert.propTypes = {
  children: PropTypes.any,
};

export default Alert;
