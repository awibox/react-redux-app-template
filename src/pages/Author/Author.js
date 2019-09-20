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
        const {author} = this.props;
        return (
            <AuthorInfo author={author}/>
        );
    }
}

const mapStateToProps = state => ({author: state.authorState.author});

export default connect(mapStateToProps, { getAuthor })(AuthorContainer);
