import React, {Component} from 'react';
import {connect} from 'react-redux';
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo';
import {getAuthor} from '../../actions/author';
import store from '../../store';

class AuthorContainer extends Component {
    componentDidMount() {
        this.props.getAuthor();
    }
    render() {
        console.log('this.props', this.props);
        const {author} = this.props;
        return (
            <AuthorInfo author={author}/>
        );
    }
}

const mapStateToProps = state => ({author: state.authorState.author});

export default connect(mapStateToProps, { getAuthor })(AuthorContainer);
