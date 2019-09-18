import axios from 'axios';
import {GET_HOME_SUCCESS, GET_HOME_RELEASES} from '../actions/types';
import {getError} from "./error";
import {gitHubApiUrl} from '../../configs/config';

const END_POINT = 'repos';

const getHomeSuccess = home => ({
    type: GET_HOME_SUCCESS,
    home
});

const getHomeReleases = releases => ({
    type: GET_HOME_RELEASES,
    releases
});

export const getHome = () => dispatch => {
    axios.get(`${gitHubApiUrl}/${END_POINT}/awibox/react-redux-app-boilerplate`)
        .then(response => {
            dispatch(getHomeSuccess(response.data));
        }).catch(err => {
        dispatch(getError(err.response.data))
    });
};

export const getReleases = () => dispatch => {
    return axios.get(`${gitHubApiUrl}/${END_POINT}/awibox/react-redux-app-boilerplate/releases`)
        .then(response => {
            dispatch(getHomeReleases(response.data));
        }).catch(err => {
            dispatch(getError(err.response.data))
        });
};
