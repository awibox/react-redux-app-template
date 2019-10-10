import axios from 'axios';
import { gitHubApiUrl } from 'config';
import { getError } from 'actions/errorActions';
import { setLoadStatus } from 'actions/loadActions';
import { GET_REPOS_SUCCESS } from './types';

const END_POINT = 'users';

export const getReposSuccess = (repos) => ({
  type: GET_REPOS_SUCCESS,
  payload: repos,
});

export const getReposAction = (user) => async (dispatch) => {
  dispatch(setLoadStatus(true));
  try {
    const { data } = await axios.get(`${gitHubApiUrl}/${END_POINT}/${user}/repos`);
    dispatch(getReposSuccess(data));
  } catch (err) {
    dispatch(getError(err.response.data));
  }
  dispatch(setLoadStatus(false));
};
