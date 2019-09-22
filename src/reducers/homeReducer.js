import {GET_HOME_SUCCESS} from 'actions/types';

const initialState = {
  home: []
};

const homeReducer = function(state = initialState, action) {
  switch(action.type) {
    case GET_HOME_SUCCESS:
      return {...state, home: action.home};
    default:
      return state;
  }
};

export default homeReducer;
