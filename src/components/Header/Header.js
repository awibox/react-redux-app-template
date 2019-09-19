import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.scss';
import NavBar from 'components/NavBar/NavBar';

export default class HomeComponent extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <Link className={styles.logo} to="/"></Link>
                    <Link className={styles.name} to="/">React Redux App</Link>
                    <NavBar />
                </div>
            </header>
        );
    }
};
