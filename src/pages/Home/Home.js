import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeInfo from '../../components/HomeInfo/HomeInfo';
import * as homeApi from '../../actions/home';
import store from '../../store';

class HomeComponent extends Component {

    componentDidMount() {
        homeApi.getHome();
        homeApi.getReleases();
    }

    render() {
        return (
            <HomeInfo home={this.props.home} releases={this.props.releases}/>
        );
    }

}

const mapStateToProps = (store) => ({
    home: store.homeState.home,
    releases: store.homeState.releases
});

export default connect(mapStateToProps)(HomeComponent);
