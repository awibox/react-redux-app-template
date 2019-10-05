import { GET_REPOS_SUCCESS } from 'actions/types';
import { List } from 'immutable';

const initialState = {
  repos: List([{
    html_url: '',
    name: '',
    description: '',
    language: '',
    id: 0,
    size: 0,
    stargazers_count: 0,
  }]),
};

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
