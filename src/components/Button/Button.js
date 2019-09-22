import React from 'react';
import classNames from 'classnames';
// Styles
import styles from './Button.scss';

export default (props) => {
    const {icon, children, onClick} = props;
    return (
        <div className={classNames(styles.btn, {[styles.btnIcon]: icon})} onClick={onClick}>
            {icon && <span className={styles.icon}><i className={'fa ' + icon}></i></span>}
            {children}
        </div>
    )
};
