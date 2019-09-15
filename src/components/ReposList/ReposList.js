import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ReposList.scss';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div>
            {props.repos.map(repo => {
                let languageStyle;
                if (repo.language === 'JavaScript') {
                    languageStyle = {
                        color: '#f1e05a'
                    }
                } else if (repo.language === 'TypeScript'){
                    languageStyle = {
                        color: '#2b7489'
                    }
                }
                return (
                    <div key={repo.id} className={styles.item}>
                        <Link to={repo.html_url} target="_blank" className={styles.name}>{repo.name}</Link>
                        <div className={styles.githubIcon}> <i className="fa fa-github" aria-hidden="true"></i></div>
                        <div className={styles.desc}>{repo.description}</div>
                        <div className={styles.panel}>
                            <div className={styles.property}><i className="fa fa-circle"  style={languageStyle}></i> {repo.language}</div>
                            <div className={styles.size}><i className="fa fa-file-archive-o"></i> {(repo.size / 1024).toFixed(2)} mb</div>
                            <div className={styles.stars}><i className="fa fa-star" aria-hidden="true"></i> {repo.stargazers_count}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
