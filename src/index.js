/*
    ./src/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import 'bootstrap';

require('./styles/main.scss');
ReactDOM.render(<App />, document.getElementById('root'));