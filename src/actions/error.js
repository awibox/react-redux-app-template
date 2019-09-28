import { GET_ERRORS } from 'actions/types';

export const getError = (error) => ({
  type: GET_ERRORS,
  payload: error,
});

export default getError;
