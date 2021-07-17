import { Provider } from "react-redux";
import { createStore } from "redux";
import { Button } from "./Button";
import "./styles.css";
import { reducer } from "./reducer";
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "MINUS" });
store.dispatch({ type: "MINUS" });
// const OnPlus = () => {
//   alert();
// };

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <Button text={"PLUS"} />
        </div>
      </div>
    </Provider>
  );
}
