import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
// Styles
import styles from './Loader.scss';

const Loader = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress
    && <div className={styles.loader}>
      <div className={styles.spinnerBorder} />
    </div>
  );
};

export default Loader;
