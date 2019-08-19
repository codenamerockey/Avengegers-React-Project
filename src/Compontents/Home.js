import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div>
      <h1>Avengers Database</h1>
      <h4>Danger! This is classified information!</h4>
      <Link to="/avengers" className="enter">
        Enter
      </Link>
    </div>
  );
}

export default Home;
