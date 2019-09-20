import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import AuthorInfo from 'components/AuthorInfo/AuthorInfo';
import {getAuthor} from 'actions/author';

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
                {typeof errors.message !== 'undefined' && <div>{errors.message}</div>}
                <AuthorInfo author={author}/>
            </div>
        );
    }
}

const mapStateToProps = store => ({author: store.authorState.author, errors: store.errors});

export default connect(mapStateToProps, { getAuthor })(AuthorContainer);
