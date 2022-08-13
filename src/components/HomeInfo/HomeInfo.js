import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
// Components
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
// Styles
import styles from './HomeInfo.scss';

// Using "Stateless Functional Components"
export default class HomeInfo extends Component {
  static propTypes = {
    home: ImmutablePropTypes.contains({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    home: {
      name: 'react-redux-app-template',
      description: 'About\n'
        + 'The template that will help you quickly start developing your project using React',
      html_url: 'https://github.com/awibox/react-redux-app-template',
    },
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
            <h1 className={styles.name}>{home.get('name')}</h1>
            <div className={styles.text}>{home.get('description')}</div>
            <div className={styles.button}>
              <Button variant="contained" startIcon={<i className="fa fa-github"/>}
                      onClick={() => this.buttonClick(home.get('html_url'))}>
                Download with Github
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
