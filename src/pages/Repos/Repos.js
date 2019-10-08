import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getReposAction } from 'actions/reposActions';
import { UserArray } from 'config';
import { routes } from 'router';
// Components
import ReposCard from 'components/ReposCard/ReposCard';
import Title from 'components/Title/Title';
import Card from 'components/Card/Card';
import Alert from 'components/Alert/Alert';
import User from 'components/User/User';
// Selectors
import { getReposSelector } from 'selectors/reposSelectors';
import { getErrorsSelector } from 'selectors/errorSelectors';
// Styles
import { List } from 'immutable';
import styles from './Repos.scss';

class ReposContainer extends PureComponent {
  static propTypes = {
    errors: PropTypes.shape({
      message: PropTypes.string,
    }),
    getReposAction: PropTypes.func.isRequired,
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

  changeUser(user) {
    if (typeof user !== 'undefined') {
      this.props.getReposAction(user);
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
        {typeof errors.message !== 'undefined' && <Alert>{errors.message}</Alert>}
        <Title>Select the user</Title>
        <Card className={styles.users}>
          {UserArray.map((userName) => (
            <NavLink className={styles.link}
                     activeClassName={styles.linkActive}
                     key={userName}
                     to={`${routes.repos}/${userName}`}
                     onClick={() => this.changeUser(userName)}>
              <User>{userName}</User>
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

const mapStateToProps = (state) => ({
  repos: getReposSelector(state),
  errors: getErrorsSelector(state),
});

export default connect(mapStateToProps, { getReposAction })(ReposContainer);
