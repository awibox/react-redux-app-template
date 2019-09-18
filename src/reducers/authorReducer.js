import * as types from 'actions/types';

const initialState = {
    author: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GET_AUTHOR_SUCCESS:
            return {
                ...state,
                author: action.payload
            };
        default:
            return state;

    }
}
