import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './NavBar.scss';
import classNames from 'classnames';
import {routes} from 'router';

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
    renderLinks() {
       return (
           <aside className={styles.navMenu}>
               <NavLink exact className={styles.navMenuItem}
                        activeClassName={styles.navMenuItemActive}
                        onClick={() => this.closeMenu()}
                        to="/">Home page</NavLink>
               <NavLink className={styles.navMenuItem}
                        activeClassName={styles.navMenuItemActive}
                        onClick={() => this.closeMenu()}
                        to={routes.repos}>Repositories</NavLink>
               <NavLink className={styles.navMenuItem}
                        activeClassName={styles.navMenuItemActive}
                        onClick={() => this.closeMenu()}
                        to={routes.author}>Author</NavLink>
           </aside>
       );
    }
    closeMenu() {
        this.setState({openNavMenu: false})
    }
    render() {
        return (
            <div className={styles.nav}>
                <div className={styles.navDesktopMenu}>
                    {this.renderLinks()}
                </div>
                <div className={classNames(styles.navMobile, { [styles.navMobileActive]: this.state.openNavMenu })} onClick={this.toggleMobileMenu}>
                    <i className="fa fa-list"></i>
                </div>
                <div className={classNames(styles.navMobileMenu, { [styles.show]: this.state.openNavMenu })}>
                    {this.renderLinks()}
                </div>
            </div>
        );
    }
};
