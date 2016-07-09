import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';
import data from './data/data';

const articles = data.articles;

const defaultSate = {
    articles,
};

const store = createStore(rootReducer, defaultSate);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
