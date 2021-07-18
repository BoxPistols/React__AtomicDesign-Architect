import App from "../View/App";
import { connect } from "react-redux";

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
