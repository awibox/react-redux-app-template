import axios from 'axios';
import {GET_REPOS_SUCCESS} from './types';
import {getError} from "./error";
import {gitHubApiUrl} from 'config';

const END_POINT = 'users';

const getReposSuccess = repos => ({
    type: GET_REPOS_SUCCESS,
    repos
});

export const getRepos = user => dispatch => {
    axios.get(`${gitHubApiUrl}/${END_POINT}/${user}/repos`)
        .then(response => {
            dispatch(getReposSuccess(response.data));
        }).catch(err => {
        dispatch(getError(err.response.data))
    });
};
