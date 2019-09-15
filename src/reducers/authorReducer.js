import * as types from '../actions/types';

const initialState = {
  author: []
};

const authorReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_AUTHOR_SUCCESS:
      return Object.assign({}, state, { author: action.author });
  }

  return state;

};

export default authorReducer;
