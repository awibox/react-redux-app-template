import axios from 'axios';
import { gitHubApiUrl } from 'config';
import { GET_REPOS_SUCCESS } from './types';
import { getError } from './error';

const END_POINT = 'users';

export const getReposSuccess = (repos) => ({
  type: GET_REPOS_SUCCESS,
  repos,
});

export const getReposAction = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${gitHubApiUrl}/${END_POINT}/${user}/repos`);
    dispatch(getReposSuccess(data));
  } catch (err) {
    dispatch(getError(err.response.data));
  }
};
