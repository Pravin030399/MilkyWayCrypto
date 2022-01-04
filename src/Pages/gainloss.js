import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/gainloss.css";
import DataTop from "./temp";
import DataBottom from "./tempLoss";
import { Route } from "react-router-dom";

function Gainloss() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabContainer">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Top Gainers
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Top Losers
        </button>
      </div>

      <div className="infoGainLoss">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <DataTop />
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <DataBottom />
        </div>
      </div>
    </div>
  );
}

export default Gainloss;
