import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getRepos} from 'actions/repos';

import ReposCard from 'components/ReposCard/ReposCard';
import Title from "components/Title/Title";
import Card from "components/Card/Card";
import Alert from "components/Alert/Alert";
import User from "components/User/User";

import styles from './Repos.scss';

const UserArray = ['awibox', 'angular'];

class ReposContainer extends Component {
    static propTypes = {
        getRepos: PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired,
    };

    componentDidMount() {
        const {user} = this.props.match.params;
        if (typeof user !== 'undefined') {
            this.props.getRepos(user);
        }
    }

    changeUser(user) {
        if (typeof user !== 'undefined') {
            this.props.getRepos(user);
        }
    }

    render() {
        const {repos, errors} = this.props;
        const {user} = this.props.match.params;
        return (
            <div className={styles.repos}>
                {typeof errors.message !== 'undefined' && <Alert>{errors.message}</Alert>}
                <Title>Select the user</Title>
                <Card className={styles.users}>
                    {UserArray.map(user => {
                        return (
                            <Link className={styles.link} to={`/repos/${user}`} onClick={() => this.changeUser(user)}>
                                <User>{user}</User>
                            </Link>
                        );
                    })}
                </Card>
                {repos.length > 0 && <Title>Repositories of {user}</Title>}
                {repos.length > 0 && repos.map(repo => {
                    let languageStyle;
                    if (repo.language === 'JavaScript') {
                        languageStyle = {
                            color: '#f1e05a'
                        }
                    } else if (repo.language === 'TypeScript') {
                        languageStyle = {
                            color: '#2b7489'
                        }
                    }
                    return (
                        <ReposCard key={repo.id + '_' + repo.name} repo={repo} style={languageStyle}/>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = store => ({repos: store.reposState.repos, errors: store.errors});

export default connect(mapStateToProps, {getRepos})(ReposContainer);
