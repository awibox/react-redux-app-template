import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearRepos, getReposAction } from 'actions/reposActions';
import { UserArray, routes } from 'config';
import { List } from 'immutable';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-promise-loader';
// Components
import ReposCard from 'components/ReposCard/ReposCard';
import Title from 'components/Title/Title';
import User from 'components/User/User';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
// Selectors
import { getReposSelector } from 'selectors/reposSelectors';
import { getErrorsSelector } from 'selectors/errorSelectors';
// Styles
import styles from './Repos.scss';

class ReposContainer extends PureComponent {
  static propTypes = {
    errors: PropTypes.shape({
      message: PropTypes.string,
    }),
    getReposAction: PropTypes.func.isRequired,
    clearRepos: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.string,
      }),
    }),
    repos: ImmutablePropTypes.list.isRequired,
  };

  static defaultProps = {
    repos: List([{
      html_url: '',
      name: '',
      description: '',
      language: '',
      id: 0,
      size: 0,
      stargazers_count: 0,
    }]),
  };

  componentDidMount() {
    const { user } = this.props.match.params;
    if (typeof user !== 'undefined') {
      this.props.getReposAction(user);
    }
  }

  changeUser(newUser) {
    const { user } = this.props.match.params;
    this.props.clearRepos();
    if (typeof newUser !== 'undefined' && newUser !== user) {
      this.props.getReposAction(newUser);
    }
  }

  languageStyle = (language) => {
    switch (language) {
      case 'JavaScript': return { color: '#f1e05a' };
      case 'TypeScript': return { color: '#2b7489' };
      case 'Ruby': return { color: '#701516' };
      case 'HTML': return { color: '#e34c26' };
      case 'CSS': return { color: '#563d7c' };
      default: return {};
    }
  };

  render() {
    const { repos, errors } = this.props;
    const { user } = this.props.match.params;
    return (
      <div className={styles.repos}>
        <Title>Select the user</Title>
        <Card>
          <div className={styles.users}>
            {UserArray.map((userName) => (
              <NavLink className={styles.link}
                       activeClassName={styles.linkActive}
                       key={userName}
                       to={`${routes.repos}/${userName}`}
                       onClick={() => this.changeUser(userName)}>
                <User>{userName}</User>
              </NavLink>
            ))}
          </div>
        </Card>
        <div style={{ width: '100%', height: '20px' }}></div>
        {typeof user !== 'undefined' && <Title>Repositories of {user}</Title>}
        {typeof errors.message !== 'undefined' && <Alert severity="error" style={{ marginBottom: 15 }}>{errors.message}</Alert>}
        <div className={styles.reposList} >
          {typeof user !== 'undefined' && repos.map((repo) => (
            <ReposCard key={`${repo.id}_${repo.name}`} repo={repo} style={this.languageStyle(repo.language)}/>
          ))}
        </div>
        <Loader promiseTracker={usePromiseTracker} color={'#3F88C5'}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  repos: getReposSelector(state),
  errors: getErrorsSelector(state),
});

export default connect(mapStateToProps, { getReposAction, clearRepos })(ReposContainer);
