import axios from 'axios';
import { GET_HOME_SUCCESS } from 'actions/types';
import { gitHubApiUrl } from 'config';
import { getError } from './error';

const END_POINT = 'repos';

export const getHomeSuccess = (home) => ({
  type: GET_HOME_SUCCESS,
  home,
});

export const getHome = () => (dispatch) => {
  axios.get(`${gitHubApiUrl}/${END_POINT}/awibox/react-redux-app-boilerplate`)
    .then((response) => {
      dispatch(getHomeSuccess(response.data));
    }).catch((err) => {
      dispatch(getError(err.response.data));
    });
};
