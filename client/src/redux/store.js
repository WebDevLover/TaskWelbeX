import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

// Store хранилище состояний, принимает в себя один основной rootReducer
const store = configureStore({
  reducer: rootReducer
});

export default store;
