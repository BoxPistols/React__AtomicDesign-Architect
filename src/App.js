import "./styles.css";
import { Button } from "./compontnts/Button";

export default function App() {
  return (
    <div>
      <div className="App">
        <h1>Hello Redux</h1>
        <Button child={"ボタンです"} onClick={() => alert()} />
      </div>
    </div>
  );
}
