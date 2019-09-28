import { GET_REPOS_SUCCESS } from 'actions/types';

const initialState = {
  repos: [{
    html_url: '',
    name: '',
    description: '',
    language: '',
    id: 0,
    size: 0,
    stargazers_count: 0,
  }],
};

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_SUCCESS:
      return { ...state, repos: action.repos };
    default:
      return state;
  }
};

export default reposReducer;
