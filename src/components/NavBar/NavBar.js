import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'router';
import classNames from 'classnames';
// Styles
import styles from './NavBar.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNavMenu: false,
    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState({ openNavMenu: !this.state.openNavMenu });
  }

  renderLinks() {
    return (
      <div className={styles.navMenu}>
        <NavLink exact className={styles.navMenuItem}
                 activeClassName={styles.navMenuItemActive}
                 onClick={() => this.closeMenu()}
                 to="/">
          <i className="fa fa-home"/>
          <span className={styles.navMenuItemText}>Home page</span>
        </NavLink>
        <NavLink className={styles.navMenuItem}
                 activeClassName={styles.navMenuItemActive}
                 onClick={() => this.closeMenu()}
                 to={routes.repos}>
          <i className="fa fa-database"/>
          <span className={styles.navMenuItemText}>Repositories</span>
        </NavLink>
        <NavLink className={styles.navMenuItem}
                 activeClassName={styles.navMenuItemActive}
                 onClick={() => this.closeMenu()}
                 to={routes.author}>
          <i className="fa fa-address-card"/>
          <span className={styles.navMenuItemText}>Author</span>
        </NavLink>
      </div>
    );
  }

  closeMenu() {
    this.setState({ openNavMenu: false });
  }

  render() {
    return (
      <div className={styles.nav}>
        <div className={styles.navDesktopMenu}>
          {this.renderLinks()}
        </div>
        <div className={classNames(styles.navMobile,
          { [styles.navMobileActive]: this.state.openNavMenu })}
             onClick={this.toggleMobileMenu}>
          <i className="fa fa-list"></i>
        </div>
        <div className={classNames(styles.navMobileMenu,
          { [styles.show]: this.state.openNavMenu })}>
          {this.renderLinks()}
        </div>
      </div>
    );
  }
}
