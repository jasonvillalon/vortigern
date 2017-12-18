require('regenerator-runtime/runtime');
import * as e6p from 'es6-promise';
(e6p as any).polyfill();
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'isomorphic-fetch';
import 'raf/polyfill';

import { App } from 'containers';
import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Store from './app/redux/store';
const store = new Store(
  createHistory(),
  window.__INITIAL_STATE__,
);

const s = store.store();

ReactDOM.hydrate(
  <Provider store={s} key="provider">
    <ConnectedRouter
      history={store.history()}
    >
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
