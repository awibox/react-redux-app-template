import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { getHomeAction } from 'actions/homeActions';
import { Map } from 'immutable';
// Components
import HomeInfo from 'components/HomeInfo/HomeInfo';
import Alert from 'components/Alert/Alert';
import Loader from 'components/Loader/Loader';
// Selectors
import { getHomeSelector } from 'selectors/homeSelectors';
import { getErrorsSelector } from 'selectors/errorSelectors';
import { getLoadStatusSelector } from 'selectors/loadSelectors';

class HomeContainer extends Component {
  static propTypes = {
    getHomeAction: PropTypes.func.isRequired,
    home: ImmutablePropTypes.contains({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
    }),
    errors: PropTypes.shape({
      message: PropTypes.string,
    }),
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    home: Map({
      name: '',
      description: '',
      html_url: '',
    }),
  };

  componentDidMount() {
    this.props.getHomeAction();
  }

  render() {
    const { home, errors, isLoading } = this.props;
    return (
      <div>
        {typeof errors.message !== 'undefined' && <Alert>{errors.message}</Alert>}
        <HomeInfo home={home}/>
        {isLoading && <Loader/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  home: getHomeSelector(state),
  errors: getErrorsSelector(state),
  isLoading: getLoadStatusSelector(state),
});

export default connect(mapStateToProps, { getHomeAction })(HomeContainer);
