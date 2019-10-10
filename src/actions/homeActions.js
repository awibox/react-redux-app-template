import axios from 'axios';
import { GET_HOME_SUCCESS } from 'actions/types';
import { gitHubApiUrl, authorAccount, repoName } from 'config';
import { setLoadStatus } from 'actions/loadActions';
import { getError } from './errorActions';

const END_POINT = 'repos';


export const getHomeSuccess = (home) => ({
  type: GET_HOME_SUCCESS,
  payload: home,
});

export const getHomeAction = () => async (dispatch) => {
  dispatch(setLoadStatus(true));
  try {
    const { data } = await axios.get(`${gitHubApiUrl}/${END_POINT}/${authorAccount}/${repoName}`);
    dispatch(getHomeSuccess(data));
  } catch (err) {
    dispatch(getError(err.response.data));
  }
  dispatch(setLoadStatus(false));
};
