import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import manageRestaurant from "./reducers/manageRestaurant";

import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(
  manageRestaurant,
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
