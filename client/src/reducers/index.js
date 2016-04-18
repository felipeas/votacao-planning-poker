import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
//import { items } from './items';
import app from './app';
import sprints from './sprints';

const rootReducer = combineReducers({
    router: routerStateReducer,
    form: formReducer,
    app,
    sprints,
});

export default rootReducer;
