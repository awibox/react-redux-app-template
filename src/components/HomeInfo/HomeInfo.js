import React from 'react';
import styles from './HomeInfo.scss';

// Using "Stateless Functional Components"
export default function (props) {
  let avatar_url, lastRelease, prerelease, published_at = '1970-01-01T00:00:00Z';
  for (let data in props.home.owner) {
    if (data == 'avatar_url') {
      avatar_url = props.home.owner[data];
    }
  }
  for (let data in props.releases) {
    if (props.releases[data].published_at > published_at) {
      published_at = props.releases[data].published_at;
      lastRelease = props.releases[data].tag_name;
      prerelease = props.releases[data].prerelease;
    }
  }
  return (
    <div className="data-list">
      <div className={styles.homeInfo}>
          <h1 className={styles.name}>{props.home.name}
            <div className={styles.version}>v {lastRelease} {prerelease ? 'Beta' : ''}</div>
          </h1>
        <div className={styles.text}>{props.home.description}</div>
        <p><a className="btn btn_lg btn_success" href={props.home.html_url}>Download with Github</a></p>
      </div>
    </div>
  );
}
