import axios from 'axios';
import {GET_AUTHOR_SUCCESS} from '../actions/types';
import {getError} from "./error";
import {gitHubApiUrl, authorAccount} from '../../configs/config';

const END_POINT = 'users';

const getAuthorSuccess = author => ({
    type: GET_AUTHOR_SUCCESS,
    payload: author
});

export const getAuthor = () => dispatch => {
    axios.get(`${gitHubApiUrl}/${END_POINT}/${authorAccount}`)
        .then(response => {
            const {data} = response;
            dispatch(getAuthorSuccess(data));
        }).catch(err => {
            dispatch(getError(err.response.data))
        });
};
