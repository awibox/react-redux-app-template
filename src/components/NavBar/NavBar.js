import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { navigationItems } from 'config';
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
        {navigationItems.map((item) => (
          <NavLink key={item.route} exact className={styles.navMenuItem}
                   activeClassName={styles.navMenuItemActive}
                   onClick={() => this.closeMenu()}
                   to={item.route}>
            <i className={`fa fa-${item.icon}`}/>
            <span className={styles.navMenuItemText}>{item.name}</span>
          </NavLink>
        ))}
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
