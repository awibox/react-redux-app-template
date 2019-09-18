import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReposList from 'components/ReposList/ReposList';
import {getRepos} from 'actions/repos';
import PropTypes from "prop-types";

class ReposContainer extends Component {

    componentDidMount() {
        this.props.getRepos();
    }

    render() {
        const {repos} = this.props;
        return (
            <ReposList repos={repos}/>
        );
    }
}

ReposContainer.propTypes = {
    getRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
};

const mapStateToProps = (store) => ({repos: store.reposState.repos});

export default connect(mapStateToProps, {getRepos})(ReposContainer);
