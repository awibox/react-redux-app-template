import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeInfo from '../../components/HomeInfo/HomeInfo';
import {getHome, getReleases} from '../../actions/home';

class HomeComponent extends Component {

    componentDidMount() {
        const {getHome, getReleases} = this.props;
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

const mapStateToProps = (state) => ({
    home: state.homeState.home,
    releases: state.homeState.releases
});

export default connect(mapStateToProps, {getHome, getReleases})(HomeComponent);
