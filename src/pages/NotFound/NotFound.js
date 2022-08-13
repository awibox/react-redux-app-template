import React from 'react';
// Components
import Card from '@mui/material/Card';
// Styles
import styles from './NotFound.scss';

const NotFound = () => (
  <Card className={styles.notFound}>
    <div className={styles.code}>404</div>
    <p>We couldn&apos;t find this page.</p>
    <p>The page you are looking for does not exists.</p>
  </Card>
);
export default NotFound;
