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
        const {home, errors} = this.props;
        return (
            <div>
                {typeof errors.message !== 'undefined' && <div>{errors.message}</div>}
                <HomeInfo home={home}/>
            </div>

        );
    }

}

const mapStateToProps = store => ({home: store.homeState.home, releases: store.homeState.releases, errors: store.errors});

export default connect(mapStateToProps, {getHome, getReleases})(HomeContainer);
