import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import Gainloss from "./gainloss";
// import marketpage from './marketpage'
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Gainloss />
      {/* <ul>
        <li>
          <Link to="/marketpage">marketpage</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Home;
