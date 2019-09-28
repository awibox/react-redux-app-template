import React, { Component } from 'react';
// Components
import Card from 'components/Card/Card';
// Styles
import styles from './NotFound.scss';

export default class NotFound extends Component {
  render() {
    return (
            <Card className={styles.notFound}>
                <div className={styles.code}>404</div>
                <p>We couldn't find this page.</p>
                <p>The page you are looking for does not exists.</p>
            </Card>
    );
  }
}
