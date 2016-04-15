import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import configureStore from './store';
import routes from './routes';
import { fazerLogin } from './actions/login';

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const store = configureStore();

const credentials = localStorage.getItem('credentials');

if (credentials) {
    debugger;
    const [email, senha] = atob(credentials).split(':');
    store.dispatch(fazerLogin(email, senha));
}

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={history} />
    </Provider>,
    document.getElementById('root')
);
