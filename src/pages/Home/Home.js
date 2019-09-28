import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHome } from 'actions/home';
// Components
import HomeInfo from 'components/HomeInfo/HomeInfo';
import Alert from 'components/Alert/Alert';

class HomeContainer extends Component {
    static propTypes = {
      getHome: PropTypes.func.isRequired,
      home: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired,
      }),
      errors: PropTypes.shape({
        message: PropTypes.string,
      }),
    };

    componentDidMount() {
      this.props.getHome();
    }

    render() {
      const { home, errors } = this.props;
      return (
            <div>
                {typeof errors.message !== 'undefined' && <Alert>{errors.message}</Alert>}
                <HomeInfo home={home}/>
            </div>
      );
    }
}

const mapStateToProps = (store) => ({ home: store.homeState.home, errors: store.errors });

export default connect(mapStateToProps, { getHome })(HomeContainer);
