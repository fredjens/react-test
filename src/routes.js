
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/app';
import Home from './components/home';
import About from './components/about';
import Single from './components/single';

const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/about" component={About} />
                <Route path="/article/:id" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

export default routes;
