import React from 'react';
import styles from './Alert.scss';

export default (props) => (
    <div className={styles.alert}>
        {props.children}
    </div>
);
