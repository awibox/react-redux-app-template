import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './NavBar.scss';
import classNames from 'classnames';

const Links = () => (
    <aside className={styles.navMenu}>
        <Link className={styles.navMenuItem} to="/">About</Link>
        <Link className={styles.navMenuItem} to="/repos">Repositories</Link>
        <Link className={styles.navMenuItem} to="/author">Author</Link>
    </aside>
);

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNavMenu: false,
        };
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }
    toggleMobileMenu () {
        this.setState({openNavMenu: !this.state.openNavMenu});
    }
    render() {
        return (
            <div className={styles.nav}>
                <div className={styles.navDesktopMenu}>
                    <Links />
                </div>
                <div className={styles.navMobile} onClick={this.toggleMobileMenu}>
                    <i className="fa fa-list"></i>
                </div>
                <div className={classNames(styles.navMobileMenu, { [styles.hide]: this.state.openNavMenu })}>
                    <Links />
                </div>
            </div>
        );
    }
};
