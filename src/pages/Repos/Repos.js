import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReposList from '../../components/ReposList/ReposList';
import {getRepos} from '../../actions/repos';

class ReposComponent extends Component {

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

const mapStateToProps = (store) => ({repos: store.reposState.repos});

export default connect(mapStateToProps, {getRepos})(ReposComponent);
