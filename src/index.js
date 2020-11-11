import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import manageRestaurant from "./reducers/manageRestaurant";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(manageRestaurant, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
