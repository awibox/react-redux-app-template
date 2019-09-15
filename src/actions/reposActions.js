import * as types from './types';

export function getReposSuccess(repos) {
  return {
    type: types.GET_REPOS_SUCCESS,
    repos
  };
}
