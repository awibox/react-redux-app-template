import {GET_REPOS_SUCCESS} from './types';
import axios from 'axios';
import store from '../store';

const getReposSuccess = repos => ({
    type: GET_REPOS_SUCCESS,
    repos
});

export function getRepos() {
    return axios.get('https://api.github.com/users/awibox/repos')
        .then(response => {
            store.dispatch(getReposSuccess(response.data));
            return response;
        });
}
