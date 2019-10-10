import { GET_LOAD_STATUS } from 'actions/types';

const initialState = {
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LOAD_STATUS:
      return action.payload;
    default:
      return state;
  }
}
