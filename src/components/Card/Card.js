import React from 'react';
import classNames from 'classnames';
import styles from './Card.scss';

export default (props) => (
    <div className={classNames(styles.card, {[props.className]: props.className})}>
        {props.children}
    </div>
);
