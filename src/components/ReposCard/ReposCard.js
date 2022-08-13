import React from 'react';
import PropTypes from 'prop-types';
// Components
import Card from '@mui/material/Card';
// Styles
import styles from './ReposCard.scss';

// Using "Stateless Functional Components"
const ReposCard = (props) => {
  const { repo, style } = props;
  return (
    <div className={styles.repo}>
      {repo.id > 0
        && <Card style={{ padding: 15, marginBottom: 15 }}>
          <a href={repo.html_url} rel="noopener noreferrer" target="_blank" className={styles.name}>{repo.name}</a>
          <div className={styles.githubIcon}><i className="fa fa-github" aria-hidden="true"></i></div>
          <div className={styles.desc}>{repo.description}</div>
          <div className={styles.panel}>
            {repo.language
              && <div className={styles.property}><i className="fa fa-circle" style={style}></i> {repo.language}</div>}
            <div className={styles.size}><i className="fa fa-file-archive-o"></i> {(repo.size / 1024).toFixed(2)} mb
            </div>
            <div className={styles.stars}><i className="fa fa-star" aria-hidden="true"></i> {repo.stargazers_count}
            </div>
          </div>
        </Card>
      }
    </div>
  );
};

ReposCard.propTypes = {
  repo: PropTypes.shape({
    html_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    language: PropTypes.string,
    id: PropTypes.number.isRequired,
    size: PropTypes.number,
    stargazers_count: PropTypes.number,
  }),
  style: PropTypes.object,
};

export default ReposCard;
