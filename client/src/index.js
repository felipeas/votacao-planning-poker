import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <ReduxRouter />
    </Provider>,
    document.getElementById('root')
);
