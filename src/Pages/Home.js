import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
// import marketpage from './marketpage'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/marketpage">marketpage</Link>
        </li>
        <li>
          <Link to="/gainloss">topgainerslosers</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
