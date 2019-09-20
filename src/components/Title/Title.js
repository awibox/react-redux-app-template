import React from 'react';
import styles from './Title.scss';

export default (props) => (
    <div className={styles.title}>
        {props.children}
    </div>
);
