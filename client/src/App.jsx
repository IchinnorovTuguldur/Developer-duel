import { useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Duel from "./DuelScreen";
import GlobalStyles from "./GlobalStyles";
import Home from "./HomeScreen";
import Inspect from "./InspectScreen";
import { Navbar } from "./components";
import { inspectUser } from "./services/userService";

function App() {
  useEffect(() => {
    inspectUser();
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/duel" component={Duel} />
      <Route path="/inspect" component={Inspect} />
    </Router>
  );
}

export default App;
