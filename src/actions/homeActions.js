import * as types from '../actions/types';

export function getHomeSuccess(home) {
  return {
    type: types.GET_HOME_SUCCESS,
    home
  };
}
export function getHomeReleases(releases) {
  return {
    type: types.GET_HOME_RELEASES,
    releases
  };
}
