import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { getAuthorAction } from 'actions/authorActions';
import { Map } from 'immutable';
// Components
import AuthorInfo from 'components/AuthorInfo/AuthorInfo';
import Alert from 'components/Alert/Alert';
import Loader from 'components/Loader/Loader';
// Selectors
import { getErrorsSelector } from 'selectors/errorSelectors';
import { getAuthorSelector } from 'selectors/authorSelectors';

class AuthorContainer extends Component {
  static propTypes = {
    author: ImmutablePropTypes.contains({
      avatar_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
    }),
    getAuthorAction: PropTypes.func.isRequired,
    errors: PropTypes.shape({
      message: PropTypes.string,
    }),
  };

  static defaultProps = {
    author: Map({
      avatar_url: '',
      name: '',
      location: '',
      company: '',
      bio: '',
      html_url: '',
    }),
  };

  componentDidMount() {
    this.props.getAuthorAction();
  }

  render() {
    const { author, errors } = this.props;
    return (
      <div>
        {typeof errors.message !== 'undefined' && <Alert>{errors.message}</Alert>}
        <AuthorInfo author={author}/>
        <Loader/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  author: getAuthorSelector(state),
  errors: getErrorsSelector(state),
});

export default connect(mapStateToProps, { getAuthorAction })(AuthorContainer);
