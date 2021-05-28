import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/index'


const store = createStore(manageRestaurant);

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
