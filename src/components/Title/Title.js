import React from 'react';
import PropTypes from 'prop-types';
// Styles
import styles from './Title.scss';

const Title = (props) => (
  <div className={styles.title}>
    {props.children}
  </div>
);

Title.propTypes = {
  children: PropTypes.any,
};

export default Title;
