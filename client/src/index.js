import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory  } from 'react-router';
import configureStore from './store';
import routes from './routes';
import { fazerLogin } from './actions/login';
import { carregarLista } from './actions/sprint';

const store = configureStore();

const credentials = localStorage.getItem('credentials');

if (credentials) {
    const [email, senha] = atob(credentials).split(':');
    store.dispatch(fazerLogin(email, senha, false));
}

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);
