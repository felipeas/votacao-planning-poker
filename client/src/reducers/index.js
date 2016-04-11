import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { items } from './items';
import { app } from './app';

const rootReducer = combineReducers({
  form: formReducer,
  items,
  app,
});

export default rootReducer;
