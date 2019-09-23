import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getHome} from 'actions/home';
// Components
import HomeInfo from 'components/HomeInfo/HomeInfo';
import Alert from "components/Alert/Alert";

class HomeContainer extends Component {
    static propTypes = {
        getHome: PropTypes.func.isRequired,
        home: PropTypes.array
    };

    static defaultProps = {
        getHome: () => {},
        home: {
            name: '',
            description: '',
            html_url: ''
        }
    };

    componentDidMount() {
        const {getHome} = this.props;
        getHome();
    }

    render() {
        const {home, errors} = this.props;
        return (
            <div>
                {typeof errors.message !== 'undefined' && <Alert>{errors.message}</Alert>}
                <HomeInfo home={home}/>
            </div>

        );
    }
}

const mapStateToProps = store => ({home: store.homeState.home, errors: store.errors});

export default connect(mapStateToProps, {getHome})(HomeContainer);
