import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.scss';
import NavBar from 'components/NavBar/NavBar';

export default class HomeComponent extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Link className={styles.logoBlock} to="/home">
                    <span className={styles.logo}>
                        <i className="fa fa-gears"></i>
                    </span>
                    <span className={styles.name}>React Redux App</span>
                </Link>
                <NavBar />
            </header>
        );
    }
};
