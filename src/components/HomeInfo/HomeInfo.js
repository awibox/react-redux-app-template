import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Button from '../Button/Button';
import Card from '../Card/Card';
// Styles
import styles from './HomeInfo.scss';

// Using "Stateless Functional Components"
export default class HomeContainer extends Component {
  static propTypes = {
    home: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
    }),
  };

  buttonClick = (url) => window.open(url);

  render() {
    const { home } = this.props;
    return (
      <div className={styles.homeInfo}>
        <Card>
          <div className={styles.homeLogo}>
            <div className={styles.image}>
              <i className="fa fa-gears"></i>
            </div>
            <h1 className={styles.name}>{home.name}</h1>
            <div className={styles.text}>{home.description}</div>
            <div className={styles.button}>
              <Button icon="fa-github" onClick={() => this.buttonClick(home.html_url)}>
                Download with Github
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
