import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function Routes() {
  return <Route exact path="/" component={HomePage} />;
}

export default Routes;
