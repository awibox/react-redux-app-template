import React, {Component} from 'react';
import { connect } from 'react-redux';
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo';
import * as authorApi from '../../api/authorApi';
import store from '../../store';

class AuthorInfoContainer extends Component {

  componentDidMount() {
    authorApi.getAuthor();
  }

  render() {
    return (
      <AuthorInfo author={this.props.author} />
    );
  }

};

const mapStateToProps = function(store) {
  return {
    author: store.authorState.author
  };
};

export default connect(mapStateToProps)(AuthorInfoContainer);
