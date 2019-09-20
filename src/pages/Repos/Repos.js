import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getRepos} from 'actions/repos';

import ReposCard from 'components/ReposCard/ReposCard';
import Title from "components/Title/Title";

class ReposContainer extends Component {

    componentDidMount() {
        this.props.getRepos();
    }

    render() {
        const {repos} = this.props;
        return (
            <div>
                <Title>Repositories</Title>
                {repos.map(repo => {
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
                        <ReposCard repo={repo} style={languageStyle} />
                    );
                })}
            </div>
        );
    }
}

ReposContainer.propTypes = {
    getRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
};

const mapStateToProps = (store) => ({repos: store.reposState.repos});

export default connect(mapStateToProps, {getRepos})(ReposContainer);
