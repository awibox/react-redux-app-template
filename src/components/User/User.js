import React from 'react';
// Styles
import styles from './User.scss';

export default (props) => (
    <div className={styles.user}>
        <i className="fa fa-user" />
        {props.children}
    </div>
);
