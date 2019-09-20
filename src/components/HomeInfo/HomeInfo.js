import React from 'react';
import styles from './HomeInfo.scss';

// Using "Stateless Functional Components"
export default function (props) {
  const {home} = props;
  return (
    <div className={styles.homeInfo}>
      <div className={styles.homeCard}>
        <div className={styles.homeLogo}>
          <div className={styles.image}>
            <i className="fa fa-gears"></i>
          </div>
          <h1 className={styles.name}>{home.name}</h1>
          <div className={styles.text}>{home.description}</div>
          <p><a className="btn btn_lg btn_success" href={home.html_url}>Download with Github</a></p>
        </div>
      </div>
    </div>
  );
}
