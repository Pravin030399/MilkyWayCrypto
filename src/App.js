import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import CoinPage from "./Pages/CoinPage";

// import Home component
import home from "./Pages/Home";
import Marketpage from "./Pages/marketpage";
import Gainloss from "./Pages/gainloss";
// import About component
import Header from "./components/Header";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Router>
        <div className={classes.App}>
          <Header />
          <Switch>
            <Route exact path="/" component={home} exact />
            <Route path="/marketpage" component={Marketpage} exact />
            <Route path="/coins/:id" component={CoinPage} exact />
            {/* <Route path="/gainloss" component={Gainloss} /> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
