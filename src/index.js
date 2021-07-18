import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducer";

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
