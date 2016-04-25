import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from './containers/App';
import { Home } from './containers/Home';
import { Sprints } from './containers/Sprints';
import { Votacao } from './containers/Votacao';
import { Teste } from './containers/Teste';
import { Login } from './containers/Login';
import { Conta } from './containers/Conta';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="sprints" component={Sprints} />
    <Route path="/sprint/:sprintId" component={Votacao}/>
    <Route path="home" component={Home} />
    <Route path="teste" component={Teste} />
    <Route path="login" component={Login} />
    <Route path="conta" component={Conta} />
  </Route>
);
