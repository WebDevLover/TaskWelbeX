import { combineReducers } from 'redux';
import routesReducer from './routesReducer';

const rootReducer = combineReducers({
  routes: routesReducer,
});

export default rootReducer;
