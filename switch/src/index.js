import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { LightSwitch } from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <LightSwitch />
  </Provider>,
  document.getElementById('root')
);
