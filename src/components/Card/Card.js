import React from 'react';
import styles from './Card.scss';

export default (props) => (
    <div className={styles.card}>
        {props.children}
    </div>
);
