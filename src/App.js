import "./styles.css";
import { Button } from "./compontnts/Button";
import { connect } from "react-redux";

const App = ({ num, plus, minus }) => {
  return (
    <div>
      <div className="App">
        <h1>Hello Redux</h1>
        <h2>{num}</h2>
        <Button child={"-"} onClick={() => minus(10)} />
        <Button child={"+"} onClick={() => plus(25)} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { num: state };
};

const mapDiapatchToProps = (diapatch) => {
  return {
    plus: (numCalc) => {
      diapatch({ type: "PLUS", payload: { num: numCalc } });
    },
    minus: (numCalc) => {
      diapatch({ type: "MINUS", payload: { num: numCalc } });
    }
  };
};
export default connect(mapStateToProps, mapDiapatchToProps)(App);
