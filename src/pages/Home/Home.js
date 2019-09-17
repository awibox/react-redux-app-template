import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeInfo from '../../components/HomeInfo/HomeInfo';
import {getHome, getReleases} from '../../actions/home';
import store from '../../store';

class HomeComponent extends Component {

    componentDidMount() {
        getHome();
        getReleases();
    }

    render() {
        const {home, releases} = this.props;
        return (
            <HomeInfo home={home} releases={releases}/>
        );
    }

}

const mapStateToProps = (store) => ({
    home: store.homeState.home,
    releases: store.homeState.releases
});

export default connect(mapStateToProps)(HomeComponent);
