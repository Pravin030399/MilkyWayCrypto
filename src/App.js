import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
<<<<<<< HEAD
=======
import { makeStyles } from "@material-ui/core";

import CoinPage from "./Pages/CoinPage";
>>>>>>> 203999cc81f5df53ad79d8e67a1e8ce077440a9a

// import Home component
import home from "./Pages/Home";
import Marketpage from "./Pages/marketpage";
<<<<<<< HEAD
import Gainloss from "./Pages/gainloss";
=======
>>>>>>> 203999cc81f5df53ad79d8e67a1e8ce077440a9a
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
<<<<<<< HEAD
        <Switch>
          <Route exact path="/" component={home} />
          {/* <Redirect to="/" /> */}
          <Route path="/marketpage" component={Marketpage} />
          {/* <Redirect to="/" /> */}
          <Route path="/gainloss" component={Gainloss} />
        </Switch>
=======
        <div className={classes.App}>
          <Header />
          <Switch>
            <Route exact path="/" component={home} exact />
            <Route path="/marketpage" component={Marketpage} exact />
            <Route path="/coins/:id" component={CoinPage} exact />
          </Switch>
        </div>
>>>>>>> 203999cc81f5df53ad79d8e67a1e8ce077440a9a
      </Router>
    </>
  );
}

export default App;
