import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import { gitHubApiUrl } from 'config';
import { getError } from 'actions/errorActions';
import { GET_REPOS_SUCCESS } from './types';

const END_POINT = 'users';

export const getReposSuccess = (repos) => ({
  type: GET_REPOS_SUCCESS,
  payload: repos,
});

export const clearRepos = () => async (dispatch) => {
  dispatch(getError([]));
  dispatch(getReposSuccess([]));
};

export const getReposAction = (user) => async (dispatch) => {
  try {
    const { data } = await trackPromise(axios.get(`${gitHubApiUrl}/${END_POINT}/${user}/repos`));
    dispatch(getReposSuccess(data));
  } catch (err) {
    dispatch(getError(err.response.data));
  }
};
