import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import reposReducer from "./reposReducer";
import authorReducer from "./authorReducer";
import homeReducer from "./homeReducer";

export default combineReducers({
    errors: errorReducer,
    homeState: homeReducer,
    reposState: reposReducer,
    authorState: authorReducer,
});
