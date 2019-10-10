import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import { GET_AUTHOR_SUCCESS } from 'actions/types';
import { gitHubApiUrl, authorAccount } from 'config';
import { getError } from 'actions/errorActions';


const END_POINT = 'users';

export const getAuthorSuccess = (author) => ({
  type: GET_AUTHOR_SUCCESS,
  payload: author,
});

export const getAuthorAction = () => async (dispatch) => {
  try {
    const { data } = await trackPromise(axios.get(`${gitHubApiUrl}/${END_POINT}/${authorAccount}`));
    dispatch(getAuthorSuccess(data));
  } catch (err) {
    dispatch(getError(err.response.data));
  }
};
