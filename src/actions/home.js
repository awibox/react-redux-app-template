import axios from 'axios';
import {GET_HOME_SUCCESS} from 'actions/types';
import {gitHubApiUrl, authorAccount, repoName} from 'config';
import {getError} from './error';

const END_POINT = 'repos';


export const getHomeSuccess = (home) => ({
  type: GET_HOME_SUCCESS,
  home,
});

export const getHome = () => async (dispatch) => {
  try {
    const {data} = await axios.get(`${gitHubApiUrl}/${END_POINT}/${authorAccount}/${repoName}`);
    dispatch(getHomeSuccess(data));
  } catch (err) {
    dispatch(getError(err.response.data));
  }
};
