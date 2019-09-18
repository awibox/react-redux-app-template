import axios from 'axios';
import {GET_AUTHOR_SUCCESS} from '../actions/types';
import {getError} from "./error";

const getAuthorSuccess = author => ({
    type: GET_AUTHOR_SUCCESS,
    payload: author
});

export const getAuthor = () => dispatch => {
    axios.get('https://api.github.com/users/awibox')
        .then(response => {
            const {data} = response;
            dispatch(getAuthorSuccess(data));
        }).catch(err => {
            dispatch(getError(err.response.data))
        });
};
