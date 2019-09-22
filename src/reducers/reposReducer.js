import {GET_REPOS_SUCCESS} from 'actions/types';

const initialState = {
  repos: []
};

const reposReducer = function(state = initialState, action) {
  switch(action.type) {
    case GET_REPOS_SUCCESS:
      return {...state, repos: action.repos};
    default:
      return state;
  }
};

export default reposReducer;
