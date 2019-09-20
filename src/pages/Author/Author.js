import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {getAuthor} from 'actions/author';

import AuthorInfo from 'components/AuthorInfo/AuthorInfo';
import Alert from "components/Alert/Alert";

class AuthorContainer extends Component {
    static propTypes = {
        author: PropTypes.any.isRequired,
        getAuthor: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getAuthor();
    }

    render() {
        const {author, errors} = this.props;
        return (
            <div>
                {typeof errors.message !== 'undefined' && <Alert>{errors.message}</Alert>}
                <AuthorInfo author={author}/>
            </div>
        );
    }
}

const mapStateToProps = store => ({author: store.authorState.author, errors: store.errors});

export default connect(mapStateToProps, { getAuthor })(AuthorContainer);
