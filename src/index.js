import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools())

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
<<<<<<< HEAD
  <App />
=======
    <App />
>>>>>>> adc9608cc4e201574bdb7c0c3ad412279bb77f5f
  </Provider>,
  document.getElementById('root')
);