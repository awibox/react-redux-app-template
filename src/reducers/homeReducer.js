import * as types from 'actions/types';

const initialState = {
  home: [],
  releases: []
};

const homeReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_HOME_SUCCESS:
      return Object.assign({}, state, { home: action.home });
    case types.GET_HOME_RELEASES:
      return Object.assign({}, state, { releases: action.releases });
  }

  return state;

};

export default homeReducer;
