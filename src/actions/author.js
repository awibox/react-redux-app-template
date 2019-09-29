import axios from 'axios';
import { GET_AUTHOR_SUCCESS } from 'actions/types';
import { gitHubApiUrl, authorAccount } from 'config';
import { getError } from './error';

const END_POINT = 'users';

export const getAuthorSuccess = (author) => ({
  type: GET_AUTHOR_SUCCESS,
  payload: author,
});

export const getAuthor = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${gitHubApiUrl}/${END_POINT}/${authorAccount}`);
    dispatch(getAuthorSuccess(data));
  } catch (err) {
    dispatch(getError(err.response.data));
  }
};
