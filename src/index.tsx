import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.scss';
import 'normalize.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
