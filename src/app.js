/**
 * Created by nikhila on 02/24/2016.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './js/containers/Root';
import configureStore from './js/stores/configureStore';

const target = document.getElementById('root');
const store = configureStore(window.__INITIAL_STATE__);

const node = (
  <Root store={store} />
);

ReactDOM.render(node, target);
