import React from 'react';
// Styles
import styles from './Loader.scss';

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.spinnerBorder} />
  </div>
);

export default Loader;
