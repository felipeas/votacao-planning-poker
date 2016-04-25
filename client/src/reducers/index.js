import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';

import app from './app';
import sprints from './sprints';
import votacao from './votacao';

const rootReducer = combineReducers({
    router: routerStateReducer,
    form: formReducer,
    app,
    sprints,
    votacao,
});

export default rootReducer;
