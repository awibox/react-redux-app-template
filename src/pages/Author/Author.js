import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAuthor } from 'actions/author';
// Components
import AuthorInfo from 'components/AuthorInfo/AuthorInfo';
import Alert from 'components/Alert/Alert';

class AuthorContainer extends Component {
    static propTypes = {
      author: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired,
      }),
      getAuthor: PropTypes.func.isRequired,
      errors: PropTypes.shape({
        message: PropTypes.string,
      }),
    };

    componentDidMount() {
      this.props.getAuthor();
    }

    render() {
      const { author, errors } = this.props;
      return (
            <div>
                {typeof errors.message !== 'undefined' && <Alert>{errors.message}</Alert>}
                <AuthorInfo author={author}/>
            </div>
      );
    }
}

const mapStateToProps = (store) => ({ author: store.authorState.author, errors: store.errors });

export default connect(mapStateToProps, { getAuthor })(AuthorContainer);
