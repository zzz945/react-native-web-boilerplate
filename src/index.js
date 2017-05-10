// src/index.js is the JavaScript entry point
import './web/Config/ReactotronConfig';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './web/App';
import './web/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
