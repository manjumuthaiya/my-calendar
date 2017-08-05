/*
    ./src/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';

import 'bootstrap';
import App from './components/App.jsx';

import configureStore from './configureStore';
require('./styles/main.scss');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);