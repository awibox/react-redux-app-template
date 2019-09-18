import {GET_REPOS_SUCCESS} from './types';
import axios from 'axios';
import {getError} from "./error";

const getReposSuccess = repos => ({
    type: GET_REPOS_SUCCESS,
    repos
});

export const getRepos = () => dispatch => {
    axios.get('https://api.github.com/users/awibox/repos')
        .then(response => {
            dispatch(getReposSuccess(response.data));
        }).catch(err => {
        dispatch(getError(err.response.data))
    });
};
