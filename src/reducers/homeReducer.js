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
        home: Map(action.home),
      };
    default:
      return state;
  }
};

export default homeReducer;
