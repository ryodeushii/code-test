import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import createStore from 'createStore';

import { App } from 'containers';
import './index.scss';

const history = createBrowserHistory();
const store = createStore(history);

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE,
);
