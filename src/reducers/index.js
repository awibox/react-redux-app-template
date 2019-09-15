import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import reposReducer from "./reposReducer";

export default combineReducers({
    errors: errorReducer,
    reposState: reposReducer
});
