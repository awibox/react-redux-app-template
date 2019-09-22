import React from 'react';
// Styles
import styles from './Title.scss';

export default (props) => (
    <div className={styles.title}>
        {props.children}
    </div>
);
