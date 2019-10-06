import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { getHomeAction } from 'actions/homeActions';
// Components
import HomeInfo from 'components/HomeInfo/HomeInfo';
import Alert from 'components/Alert/Alert';
// Selectors
import { getHomeSelector } from 'selectors/homeSelectors';
import {getErrorsSelector } from 'selectors/errorSelectors';

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
  };

  componentDidMount() {
    this.props.getHomeAction();
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

const mapStateToProps = (state) => ({
  home: getHomeSelector(state),
  errors: getErrorsSelector(state),
});

export default connect(mapStateToProps, { getHomeAction })(HomeContainer);
