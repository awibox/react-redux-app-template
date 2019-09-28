import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRepos } from 'actions/repos';
import { UserArray } from 'config';
import { routes } from 'router';
// Components
import ReposCard from 'components/ReposCard/ReposCard';
import Title from 'components/Title/Title';
import Card from 'components/Card/Card';
import Alert from 'components/Alert/Alert';
import User from 'components/User/User';
// Styles
import styles from './Repos.scss';

class ReposContainer extends Component {
    static propTypes = {
      getRepos: PropTypes.func.isRequired,
      repos: PropTypes.arrayOf(PropTypes.shape({
        html_url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        language: PropTypes.string,
        id: PropTypes.number.isRequired,
        size: PropTypes.number,
        stargazers_count: PropTypes.number,
      })),
    };

    componentDidMount() {
      const { user } = this.props.match.params;
      if (typeof user !== 'undefined') {
        this.props.getRepos(user);
      }
    }

    changeUser(user) {
      if (typeof user !== 'undefined') {
        this.props.getRepos(user);
      }
    }

    languageStyle(language) {
      switch (language) {
        case 'JavaScript': return { color: '#f1e05a' };
        case 'TypeScript': return { color: '#2b7489' };
        case 'Ruby': return { color: '#701516' };
        case 'HTML': return { color: '#e34c26' };
        case 'CSS': return { color: '#563d7c' };
        default: return {};
      }
    }

    render() {
      const { repos, errors } = this.props;
      const { user } = this.props.match.params;
      return (
            <div className={styles.repos}>
                {typeof errors.message !== 'undefined' && <Alert>{errors.message}</Alert>}
                <Title>Select the user</Title>
                <Card className={styles.users}>
                    {UserArray.map((user) => (
                            <NavLink className={styles.link}
                                     activeClassName={styles.linkActive}
                                     key={user}
                                     to={`${routes.repos}/${user}`}
                                     onClick={() => this.changeUser(user)}>
                                <User>{user}</User>
                            </NavLink>
                    ))}
                </Card>
                {typeof user !== 'undefined' && <Title>Repositories of {user}</Title>}
                <div className={styles.reposList}>
                    {typeof user !== 'undefined' && repos.map((repo) => (
                            <ReposCard key={`${repo.id}_${repo.name}`} repo={repo} style={this.languageStyle(repo.language)}/>
                    ))}
                </div>
            </div>
      );
    }
}

const mapStateToProps = (store) => ({ repos: store.reposState.repos, errors: store.errors });

export default connect(mapStateToProps, { getRepos })(ReposContainer);
