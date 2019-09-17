import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeInfo from '../../components/HomeInfo/HomeInfo';
import * as homeApi from '../../api/homeApi';
import store from '../../store';

class HomeComponent extends Component {

    componentDidMount() {
        homeApi.getHome();
        homeApi.getReleases();
    }

    render() {
        return (
            <HomeInfo home={this.props.home} releases={this.props.releases} />
        );
    }

}

const mapStateToProps = function(store) {
    return {
        home: store.homeState.home,
        releases: store.homeState.releases
    };
};

export default connect(mapStateToProps)(HomeComponent);
