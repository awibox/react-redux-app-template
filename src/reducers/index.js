import { combineReducers } from 'redux';
// Reducers
import authorReducer from './authorReducer';
import errorReducer from './errorReducer';
import loadReducer from './loadReducer';
import homeReducer from './homeReducer';
import reposReducer from './reposReducer';

export default combineReducers({
  authorState: authorReducer,
  errors: errorReducer,
  load: loadReducer,
  homeState: homeReducer,
  reposState: reposReducer,
});
