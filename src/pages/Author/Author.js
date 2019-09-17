import React, {Component} from 'react';
import {connect} from 'react-redux';
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo';
import {getAuthor} from '../../actions/author';
import store from '../../store';

class AuthorContainer extends Component {

    componentDidMount() {
        getAuthor();
    }

    render() {
        const {author} = this.props;
        return (
            <AuthorInfo author={author}/>
        );
    }
}

const mapStateToProps = store => ({author: store.authorState.author});

export default connect(mapStateToProps)(AuthorContainer);
