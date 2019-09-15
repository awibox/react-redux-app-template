import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.scss';

export default class HomeComponent extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <Link className={styles.logo} to="/"></Link>
                    <Link className={styles.name} to="/">react-redux-app-boilerplate</Link>
                    <aside className={styles.menu}>
                        <Link className={styles.menuItem} to="/">About</Link>
                        <Link className={styles.menuItem} to="/repos">Repositories</Link>
                        <Link className={styles.menuItem} to="/author">Author</Link>
                    </aside>
                    <div className={styles.menuMobile}>
                        {/*<i className="fa fa-list"></i>*/}
                    </div>
                </div>
            </header>
        );
    }
};
