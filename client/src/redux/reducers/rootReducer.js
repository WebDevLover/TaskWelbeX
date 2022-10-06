import { combineReducers } from 'redux';
import routesReducer from './routesReducer';

// Главный Reducer, который в себе комбинирует все остальные
const rootReducer = combineReducers({
  routes: routesReducer,
});

export default rootReducer;
