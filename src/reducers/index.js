import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import reposReducer from "./reposReducer";
import authorReducer from "./authorReducer";

export default combineReducers({
    errors: errorReducer,
    reposState: reposReducer,
    authorState: authorReducer
});
