import axios from 'axios';
import store from '../store';
import {GET_HOME_SUCCESS, GET_HOME_RELEASES} from '../actions/types';

const getHomeSuccess = home => ({
    type: GET_HOME_SUCCESS,
    home
});

const getHomeReleases = releases => ({
    type: GET_HOME_RELEASES,
    releases
});

export function getHome() {
    return axios.get('https://api.github.com/repos/awibox/react-redux-app-boilerplate')
        .then(response => {
            store.dispatch(getHomeSuccess(response.data));
            return response;
        });
}

export function getReleases() {
    return axios.get('https://api.github.com/repos/awibox/react-redux-app-boilerplate/releases')
        .then(response => {
            store.dispatch(getHomeReleases(response.data));
            return response;
        });
}
