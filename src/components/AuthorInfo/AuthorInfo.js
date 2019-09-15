import React from 'react';
import {Link} from 'react-router-dom';
import styles from './AuthorInfo.scss';

// Using "Stateless Functional Components"
export default function (props) {
  const avatar_url = {
    backgroundImage: 'url(' + props.author.avatar_url + ')',
  };
  console.log('this.props', props)
  return (
    <div className="data-list">
      <div className={styles.authorInfo}>
        <div className={styles.title}>
          <div className={styles.logo} style={avatar_url}></div>
          <div className={styles.titleText}>{props.author.name}
            <div className={styles.titleVersion}>{props.author.location}</div>
          </div>
        </div>
        <div className={styles.infoText}>{props.author.company} - {props.author.bio}</div>
      </div>
    </div>
  );
}
