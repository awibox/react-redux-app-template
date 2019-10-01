import { GET_HOME_SUCCESS } from 'actions/types';
import { Map } from 'immutable';

const initialState = {
  home: Map({
    name: '',
    description: '',
    html_url: '',
  }),
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_SUCCESS:
      return {
        ...state,
        home: Map({
          name: action.home.name,
          description: action.home.description,
          html_url: action.home.html_url,
        }),
      };
    default:
      return state;
  }
};

export default homeReducer;
