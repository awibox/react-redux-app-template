import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
// Components
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
// Styles
import styles from './AuthorInfo.scss';

export default class AuthorInfo extends Component {
  static propTypes = {
    author: ImmutablePropTypes.contains({
      avatar_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
    }),
  };

  buttonClick = (url) => window.open(url);

  render() {
    const { author } = this.props;
    return (
      <Card className={styles.authorInfo}>
        <div className={styles.logo} style={{ backgroundImage: `url(${author.get('avatar_url')})` }} />
        <div className={styles.title}>{author.get('name')}</div>
        <div className={styles.titleVersion}>{author.get('location')}</div>
        <div className={styles.infoText}>{author.get('bio')}</div>
        <div className={styles.button}>
          <Button variant="contained" startIcon={<i className="fa fa-github"/>} onClick={() => this.buttonClick(author.get('html_url'))}>
            Github page
          </Button>
        </div>
      </Card>
    );
  }
}
