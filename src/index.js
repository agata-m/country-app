import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import {Router, hashHistory} from 'react-router';
import routes from './routes';
import { getCountries } from './actions/actions-countries';

import style from './country.css';

render (
    <Provider store={store} style={style}>
        <div>
            <Router history={hashHistory} routes={routes} />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());