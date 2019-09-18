import * as types from 'actions/types';

const initialState = {
  repos: []
};

const reposReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_REPOS_SUCCESS:
      return Object.assign({}, state, { repos: action.repos });

  }

  return state;

};

export default reposReducer;
