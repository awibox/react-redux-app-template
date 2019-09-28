import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Button from '../Button/Button';
import Card from '../Card/Card';
// Styles
import styles from './AuthorInfo.scss';

export default class AuthorInfo extends Component {
    static propTypes = {
      author: PropTypes.shape({
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
                <div className={styles.logo} style={{ backgroundImage: `url(${author.avatar_url})` }}></div>
                <div className={styles.title}>{author.name}</div>
                <div className={styles.titleVersion}>{author.location}</div>
                <div className={styles.infoText}>{author.company} - {author.bio}</div>
                <div className={styles.button}>
                    <Button icon="fa-github" onClick={() => this.buttonClick(author.html_url)}>
                        Github page
                    </Button>
                </div>
            </Card>
      );
    }
}
