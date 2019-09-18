import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo';
import {getAuthor} from '../../actions/author';

class AuthorContainer extends Component {
    componentDidMount() {
        this.props.getAuthor();
    }
    render() {
        const {author} = this.props;
        return (
            <AuthorInfo author={author}/>
        );
    }
}

AuthorContainer.propTypes = {
    author: PropTypes.any.isRequired,
    getAuthor: PropTypes.func.isRequired
};

const mapStateToProps = state => ({author: state.authorState.author});

export default connect(mapStateToProps, { getAuthor })(AuthorContainer);
