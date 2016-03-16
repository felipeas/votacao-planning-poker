import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from './containers/App';
import { Home } from './containers/Home';
import { List } from './containers/List';
import { Teste } from './containers/Teste';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="list" component={List} />
    <Route path="teste" component={Teste} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
