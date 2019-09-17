import axios from 'axios';
import store from '../store';
import {GET_AUTHOR_SUCCESS} from '../actions/types';

const getAuthorSuccess = author => ({
    type: GET_AUTHOR_SUCCESS,
    author
});

export function getAuthor() {
    return axios.get('https://api.github.com/users/awibox')
        .then(response => {
            store.dispatch(getAuthorSuccess(response.data));
            return response;
        });
}
