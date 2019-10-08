import { GET_HOME_SUCCESS } from 'actions/types';
import { Map } from 'immutable';

const initialState = {};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_SUCCESS:
      return {
        ...state,
        home: Map({
          name: action.payload.name,
          description: action.payload.description,
          html_url: action.payload.html_url,
        }),
      };
    default:
      return state;
  }
};

export default homeReducer;
