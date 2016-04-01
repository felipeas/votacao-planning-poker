import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from './containers/App';
import { Home } from './containers/Home';
import { List } from './containers/List';
import { Teste } from './containers/Teste';
import { Login } from './containers/Login';
import { Conta } from './containers/Conta';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="list" component={List} />
    <Route path="home" component={Home} />
    <Route path="teste" component={Teste} />
    <Route path="login" component={Login} />
    <Route path="conta" component={Conta} />
  </Route>
);
