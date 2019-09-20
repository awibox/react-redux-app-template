import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import HomeInfo from 'components/HomeInfo/HomeInfo';
import {getHome, getReleases} from 'actions/home';

class HomeContainer extends Component {
    static propTypes = {
        getHome: PropTypes.func.isRequired,
        getReleases: PropTypes.func.isRequired,
        home: PropTypes.any.isRequired,
        releases: PropTypes.array.isRequired
    };

    componentDidMount() {
        const {getHome, getReleases} = this.props;
        getHome();
        // getReleases();
    }

    render() {
        const {home, releases} = this.props;
        return (
            <HomeInfo home={home}/>
        );
    }

}

const mapStateToProps = (state) => ({
    home: state.homeState.home,
    releases: state.homeState.releases
});

export default connect(mapStateToProps, {getHome, getReleases})(HomeContainer);
