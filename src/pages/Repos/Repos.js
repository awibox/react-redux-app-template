import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReposList from '../../components/ReposList/ReposList';
import * as reposApi from '../../api/reposApi';
import store from '../../store';

class ReposComponent extends Component {

    componentDidMount() {
        reposApi.getRepos();
    }

    render() {
        console.log("WORKKKK")
        return (
            <ReposList repos={this.props.repos} />
        );
    }

};

const mapStateToProps = function(store) {
    return {
        repos: store.reposState.repos
    };
};

export default connect(mapStateToProps)(ReposComponent);
