import { GET_AUTHOR_SUCCESS } from 'actions/types';
import { Map } from 'immutable';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_AUTHOR_SUCCESS:
      return {
        ...state,
        author: Map({
          avatar_url: action.payload.avatar_url,
          name: action.payload.name,
          location: action.payload.location,
          company: action.payload.company,
          bio: action.payload.bio,
          html_url: action.payload.html_url,
        }),
      };
    default:
      return state;
  }
}
