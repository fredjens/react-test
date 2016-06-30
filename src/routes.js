
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from './components/main';
import Home from './components/home';
import About from './components/about';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/about" component={About} />
        </Route>
    </Router>
);

export default routes;
