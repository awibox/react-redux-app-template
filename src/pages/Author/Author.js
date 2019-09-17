import React, {Component} from 'react';
import { connect } from 'react-redux';
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo';
import * as authorApi from '../../actions/author';
import store from '../../store';

class AuthorContainer extends Component {

  componentDidMount() {
    authorApi.getAuthor().then(r => {
      console.log('r', r);
    });
  }

  render() {
    const {author} = this.props;
    return (
      <AuthorInfo author={author} />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    author: store.authorState.author
  };
};

export default connect(mapStateToProps)(AuthorContainer);
