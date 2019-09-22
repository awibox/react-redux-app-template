import React from 'react';
// Styles
import styles from './Alert.scss';

export default (props) => (
    <div className={styles.alert}>
        {props.children}
    </div>
);
