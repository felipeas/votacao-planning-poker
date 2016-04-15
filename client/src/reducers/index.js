import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
//import { items } from './items';
import app from './app';

const rootReducer = combineReducers({
    router: routerStateReducer,
    form: formReducer,
    app
});

export default rootReducer;
