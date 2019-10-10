import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import { GET_HOME_SUCCESS } from 'actions/types';
import { gitHubApiUrl, authorAccount, repoName } from 'config';
import { getError } from './errorActions';

const END_POINT = 'repos';

export const getHomeSuccess = (home) => ({
  type: GET_HOME_SUCCESS,
  payload: home,
});

export const getHomeAction = () => async (dispatch) => {
  try {
    const { data } = await trackPromise(axios.get(`${gitHubApiUrl}/${END_POINT}/${authorAccount}/${repoName}`));
    dispatch(getHomeSuccess(data));
  } catch (err) {
    dispatch(getError(err.response.data));
  }
};
