import axios from 'axios';
import {GET_HOME_SUCCESS, GET_HOME_RELEASES} from '../actions/types';

const getHomeSuccess = home => ({
    type: GET_HOME_SUCCESS,
    home
});

const getHomeReleases = releases => ({
    type: GET_HOME_RELEASES,
    releases
});

export const getHome = () => dispatch => {
    axios.get('https://api.github.com/repos/awibox/react-redux-app-boilerplate')
        .then(response => {
            dispatch(getHomeSuccess(response.data));
        });
};

export const getReleases = () => dispatch => {
    return axios.get('https://api.github.com/repos/awibox/react-redux-app-boilerplate/releases')
        .then(response => {
            dispatch(getHomeReleases(response.data));
        });
};
