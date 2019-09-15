import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.scss';

export default class HomeComponent extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <Link className={styles.logo} to="/"></Link>
                    <Link className={styles.name} to="/">BEM-builder</Link>
                    <aside className={styles.menu}>
                        <Link className={styles.menuItem} to="/" activeClassName={styles.menuItemActive}>About</Link>
                        <Link className={styles.menuItem} to="/repos"
                              activeClassName={styles.menuItemActive}>Repositories</Link>
                        <Link className={styles.menuItem} to="/author"
                              activeClassName={styles.menuItemActive}>Author</Link>
                    </aside>
                    <div className={styles.menuMobile}>
                        {/*<i className="fa fa-list"></i>*/}
                    </div>
                </div>
            </header>
        );
    }
};
