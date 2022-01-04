import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

// import Home component
import home from "./Pages/Home";
import Marketpage from "./Pages/marketpage";
import Gainloss from "./Pages/gainloss";
// import About component

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          {/* <Redirect to="/" /> */}
          <Route path="/marketpage" component={Marketpage} />
          {/* <Redirect to="/" /> */}
          <Route path="/gainloss" component={Gainloss} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
