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

store.dispatch({ type: "PLUS", payload: { num: 100 } });
store.dispatch({ type: "MINUS", payload: { num: 1000 } });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
