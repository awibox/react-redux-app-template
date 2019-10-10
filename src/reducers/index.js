import { combineReducers } from 'redux';
// Reducers
import authorReducer from './authorReducer';
import errorReducer from './errorReducer';
import homeReducer from './homeReducer';
import reposReducer from './reposReducer';

export default combineReducers({
  authorState: authorReducer,
  errors: errorReducer,
  homeState: homeReducer,
  reposState: reposReducer,
});
