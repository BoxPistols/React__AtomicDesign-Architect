import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducer";

import  App  from "./Redux/Logic/Connect";

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
