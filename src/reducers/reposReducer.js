import { GET_REPOS_SUCCESS } from 'actions/types';
import { List } from 'immutable';

const initialState = {};

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        repos: List(action.payload),
      };
    default:
      return state;
  }
};

export default reposReducer;
