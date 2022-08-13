import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { getHomeAction } from 'actions/homeActions';
import { Map } from 'immutable';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-promise-loader';
// Components
import HomeInfo from 'components/HomeInfo/HomeInfo';
import Alert from '@mui/material/Alert';
// Selectors
import { getHomeSelector } from 'selectors/homeSelectors';
import { getErrorsSelector } from 'selectors/errorSelectors';

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

  static defaultProps = {
    home: Map({
      name: '', description: '', html_url: '',
    }),
  };

  componentDidMount() {
    this.props.getHomeAction();
  }

  render() {
    const { home, errors } = this.props;
    return (<div>
        {typeof errors.message !== 'undefined'
          && <Alert severity="error" style={{ marginBottom: 15 }}>{errors.message}</Alert>}
        <HomeInfo home={home}/>
        <Loader promiseTracker={usePromiseTracker} color={'#3F88C5'}/>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  home: getHomeSelector(state), errors: getErrorsSelector(state),
});

export default connect(mapStateToProps, { getHomeAction })(HomeContainer);
