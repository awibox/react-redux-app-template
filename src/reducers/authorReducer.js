import { GET_AUTHOR_SUCCESS } from 'actions/types';
import { Map } from 'immutable';

const initialState = {
  author: Map({
    avatar_url: '',
    name: '',
    location: '',
    company: '',
    bio: '',
    html_url: '',
  }),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_AUTHOR_SUCCESS:
      return {
        ...state,
        author: Map(action.payload),
      };
    default:
      return state;
  }
}
